import { remove, render, RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presenter.js';
import NoPointView from '../view/no-point-view.js';
import PointListView from '../view/points-list-view.js';
import SortView from '../view/sort-view.js';
import TripView from '../view/trip-view.js';
import { filter } from '../utilities.js';
import { sortPointsByDay, sortPointsByPrice, sortPointsByTime } from '../utilities.js';
import { SortType, UserAction, UpdateType, FilterType } from '../const.js';
import NewEventButtonView from '../view/new-event-button-view.js';


export default class TripPresenter {
  #tripContainer = null;
  #headerContainer = null;

  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filterModel = null;

  #tripViewComponent = new TripView();
  #pointListViewComponent = new PointListView();
  #sortComponent = null;
  #noPointComponent = null;

  #points = [];
  #pointPresenters = new Map();
  #newPointComponent = null;
  #currentSortType = SortType.DAY;
  #filterType = FilterType.EVERYTHING;

  constructor(tripContainer, headerContainer, pointsModel, destinationsModel, offersModel, filterModel) {
    this.#tripContainer = tripContainer;
    this.#headerContainer = headerContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#filterModel = filterModel;
    this.#points = [...this.#pointsModel.points];

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#newPointComponent = new NewEventButtonView({onBtnClick: this.#handleAddEventBtnClick});
    render(this.#newPointComponent, this.#headerContainer);
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
    return this.#destinationsModel.destinations;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointComponent.init();
  }

  #clearTrip(resetSortType = false) {
    remove(this.#noPointComponent);
    remove(this.#sortComponent);
    this.#clearPointsList();
    this.#sortComponent = null;

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderTrip() {
    if (this.points.length === 0) {
      this.#renderNoPoints();
    }

    this.#renderSort();
    this.#renderPoints();
  }

  #renderNoPoints() {
    this.#noPointComponent = new NoPointView({
      filterType: this.#filterType
    });
    render(this.#noPointComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
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
      this.#renderPoint(point);
    });
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListViewComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearTrip();
        this.#renderTrip();
        break;
      case UpdateType.MAJOR:
        this.#clearTrip({resetSortType: true});
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

  #handleAddEventBtnClick = () => {
    this.#newPointComponent.element.disabled = true;
    const newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#pointListViewComponent.element,
      pointsModel: this.#pointsModel,
      allOffers: this.offers,
      allDestinations: this.destinations,
      onDataChange: this.#handleViewAction,
      onResetForm: this.#handleNewEventFormClose
    });
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    newPointPresenter.init();
  };

  #handleNewEventFormClose = () => {
    this.#newPointComponent.element.disabled = false;
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}

