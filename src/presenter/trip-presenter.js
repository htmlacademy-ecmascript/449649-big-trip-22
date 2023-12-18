import { render } from '../framework/render.js';
import PointView from '../view/point-view.js';
import NoPointView from '../view/no-point-view.js';
import PointListView from '../view/points-list-view.js';
import EditView from '../view/edit-view.js';
import SortView from '../view/sort-view.js';
import TripView from '../view/trip-view.js';

export default class TripPresenter {
  #tripContainer = null;

  #tripViewComponent = new TripView();
  #pointListViewComponent = new PointListView();

  #pointsModel = [];

  constructor({ tripContainer, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#pointsModel = [...this.#pointsModel.points];

    if (this.#pointsModel.length === 0) {
      render(new NoPointView(), this.#tripContainer);
    } else {
      render(new SortView(), this.#tripContainer);
      render(this.#tripViewComponent, this.#tripContainer);
      render(this.#pointListViewComponent, this.#tripContainer);
      render(new EditView({ point: this.#pointsModel[0] }), this.#pointListViewComponent.element);

      for (let i = 0; i < this.#pointsModel.length; i++) {
        render(new PointView({ point: this.#pointsModel[i] }), this.#pointListViewComponent.element);
      }
    }
  }
}

