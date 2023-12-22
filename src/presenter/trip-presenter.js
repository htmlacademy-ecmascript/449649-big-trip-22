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
  #pointsModel = null;

  #tripViewComponent = new TripView();
  #pointListViewComponent = new PointListView();

  #points = [];

  constructor({ tripContainer, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
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
      onSubmitForm: () => {
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
    if (this.#points.length === 0) {
      render(new NoPointView(), this.#tripContainer);
    } else {
      render(new SortView(), this.#tripContainer);
      render(this.#tripViewComponent, this.#tripContainer);
      render(this.#pointListViewComponent, this.#tripContainer);

      for (const point of this.#points) {
        this.#renderPoint(point);
      }
    }
  }
}

