import { render, RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import NoPointView from '../view/no-point-view.js';
import PointListView from '../view/points-list-view.js';
import SortView from '../view/sort-view.js';
import TripView from '../view/trip-view.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;

  #tripViewComponent = new TripView();
  #pointListViewComponent = new PointListView();
  #sortComponent = new SortView();
  #noPointViewComponent = new NoPointView();

  #points = [];
  #pointPresenters = new Map();

  constructor({ tripContainer, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderTrip();
  }

  #renderSort() {
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
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
      pointListContainer: this.#pointListViewComponent.element
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

