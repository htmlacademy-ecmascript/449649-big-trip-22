import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utilities.js';
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
    this.#renderPoints();
  }

  #renderPoint(point) {
    const onEscKeyDown = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        changePointToReadView();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const pointViewComponent = new PointView({
      point,
      onOpenClick: () => {
        changePointToEditView();
        document.addEventListener('keydown', onEscKeyDown);
      }
    });

    const pointEditComponent = new EditView({
      point,
      onCloseClick: () => {
        changePointToReadView();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    });

    function changePointToEditView() {
      replace(pointEditComponent, pointViewComponent);
    }

    function changePointToReadView() {
      replace(pointViewComponent, pointEditComponent);
    }

    render(pointViewComponent, this.#pointListViewComponent.element);
  }

  #renderPoints() {
    if (this.#pointsModel.length === 0) {
      render(new NoPointView(), this.#tripContainer);
    } else {
      render(new SortView(), this.#tripContainer);
      render(this.#tripViewComponent, this.#tripContainer);
      render(this.#pointListViewComponent, this.#tripContainer);

      for (let i = 0; i < this.#pointsModel.length; i++) {
        this.#renderPoint(this.#pointsModel[i]);
      }
    }
  }
}

