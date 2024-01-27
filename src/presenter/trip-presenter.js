import { remove, render, RenderPosition } from '../framework/render.js';
import UIBlocker from '../framework/ui-blocker/ui-blocker';
import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presenter.js';
import AppMessageView from '../view/app-message-view.js';
import PointListView from '../view/points-list-view.js';
import SortView from '../view/sort-view.js';
import { filter } from '../utilities.js';
import { sortPointsByDay, sortPointsByPrice, sortPointsByTime } from '../utilities.js';
import { SortType, UserAction, UpdateType, FilterType, LoadingStatus, TimeLimit } from '../const.js';

export default class TripPresenter {
  #tripContainer = null;

  #pointsModel = null;
  #appMessageComponent = null;
  #filterModel = null;
  #addNewEventButton = null;

  #pointListViewComponent = new PointListView();
  #sortComponent = null;

  #points = [];
  #pointPresenters = new Map();
  #newPointPresenter = null;
  #newPointComponent = null;
  #currentSortType = SortType.DAY;
  #filterType = FilterType.EVERYTHING;

  #uiBlocker = new UIBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT,
  });

  constructor(tripContainer, addNewEventButton, pointsModel, filterModel, onNewEventDestroy) {
    this.#tripContainer = tripContainer;
    this.#addNewEventButton = addNewEventButton;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;

    this.#addNewEventButton.disabled = true;

    this.#newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#pointListViewComponent.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handleViewAction,
      onResetForm: onNewEventDestroy
    });

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#renderTrip();
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredTasks = filter[this.#filterType](points);
    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredTasks.sort(sortPointsByTime);
      case SortType.PRICE:
        return filteredTasks.sort(sortPointsByPrice);
      case SortType.DAY:
        return filteredTasks.sort(sortPointsByDay);
    }

    return filteredTasks;
  }

  get destinations() {
    return this.#pointsModel.destinations;
  }

  get offers() {
    return this.#pointsModel.offers;
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);

    if (this.#appMessageComponent) {
      render(this.#pointListViewComponent, this.#tripContainer);
      remove(this.#appMessageComponent);
    }

    this.#newPointPresenter.init();
  }

  recoverAppMessage() {
    if (this.points.length === 0) {
      this.#renderAppMessage(this.#filterType);
    }
  }

  #clearTrip(resetSortType = false) {
    if (this.#appMessageComponent) {
      remove(this.#appMessageComponent);
    }
    remove(this.#sortComponent);
    this.#clearPointsList();
    this.#sortComponent = null;

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }

    if (this.#newPointPresenter) {
      this.#newPointPresenter.destroy();
    }
  }

  #renderTrip() {
    if (this.#pointsModel.loading) {
      this.#renderAppMessage(LoadingStatus.LOAD);
      return;
    }

    if (this.#pointsModel.loadingFailed) {
      this.#renderAppMessage(LoadingStatus.FAILED_LOAD);
      return;
    }

    if (this.points.length === 0) {
      this.#renderAppMessage(this.#filterType);
      this.#addNewEventButton.disabled = false;
    }

    this.#addNewEventButton.disabled = false;
    this.#renderSort();
    this.#renderPoints();
  }

  #renderAppMessage(message) {
    this.#appMessageComponent = new AppMessageView({messageType: message});
    render(this.#appMessageComponent, this.#tripContainer);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  }

  #renderPoints = () => {
    render(this.#pointListViewComponent, this.#tripContainer);
    this.points.forEach((point) => {
      this.#renderPoint({ point: point, offers: this.#pointsModel.offers, destinations: this.#pointsModel.destinations });
    });
  };

  #renderPoint({ point, offers, destinations }) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListViewComponent.element,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point, offers, destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
  }

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(update.id).setSaving();
        try {
          this.#pointsModel.updatePoint(updateType, update);
        } catch (err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch (error) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(update.id).setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch (error) {
          this.#pointPresenters.get(update.id).setAborting();
        }
    }
    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data, this.#pointsModel.offers, this.#pointsModel.destinations);
        break;
      case UpdateType.MINOR:
        this.#clearTrip();
        this.#renderTrip();
        break;
      case UpdateType.MAJOR:
        this.#clearTrip({resetSortType: true});
        this.#renderTrip();
        break;
      case UpdateType.INIT:
        remove(this.#appMessageComponent);
        this.#renderTrip();
        break;
    }
  };

  #handleSortTypeChange = (evt) => {
    if (evt.target.closest('input')) {
      if (this.#currentSortType === evt.target.dataset.sortType) {
        return;
      }
      this.#currentSortType = evt.target.dataset.sortType;
      this.#clearPointsList();
      this.#renderPoints();
    }
  };

  #handleNewEventFormClose = () => {
    this.#newPointComponent.element.disabled = false;
  };

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}

