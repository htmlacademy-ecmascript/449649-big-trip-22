import { render, RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import NoPointView from '../view/no-point-view.js';
import PointListView from '../view/points-list-view.js';
import SortView from '../view/sort-view.js';
import TripView from '../view/trip-view.js';
import { updateItem, sortPointsByPrice, sortPointsByTime } from '../utilities.js';
import { SortType } from '../const.js';


export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;

  #tripViewComponent = new TripView();
  #pointListViewComponent = new PointListView();
  #sortComponent = null;
  #noPointViewComponent = new NoPointView();

  #points = [];
  #pointPresenters = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedPoints = [];

  constructor({ tripContainer, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#sourcedPoints = [...this.#pointsModel.points];
    this.#renderTrip();
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointsList();
    this.#renderPoints();
  };

  #renderSort() {
    this.#sortComponent = new SortView({ onSortTypeChange: this.#handleSortTypeChange });
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(sortPointsByPrice);
        break;
      case SortType.PRICE:
        this.#points.sort(sortPointsByTime);
        break;
      default:
        this.#points = [...this.#sourcedPoints];
    }

    this.#currentSortType = sortType;
  }

  #renderNoPoints() {
    render(this.#noPointViewComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  }

  #renderPointsListView() {
    render(this.#pointListViewComponent, this.#tripContainer);
  }

  #renderTripView() {
    render(this.#tripViewComponent, this.#tripContainer);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListViewComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    for (const point of this.#points) {
      this.#renderPoint(point);
    }
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderTrip() {
    if (this.#points.length === 0) {
      this.#renderNoPoints();
    } else {
      this.#renderTripView();
      this.#renderSort();
      this.#renderPointsListView();
      this.#renderPoints();
    }
  }
}

