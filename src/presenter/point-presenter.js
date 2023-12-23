import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utilities.js';
import PointView from '../view/point-view.js';
import EditView from '../view/edit-view.js';

export default class PointPresenter {
  #pointListContainer = null;
  #pointViewComponent = null;
  #pointEditComponent = null;
  #point = null;

  constructor({pointListContainer}) {
    this.#pointListContainer = pointListContainer;
  }

  init(point) {
    this.#point = point;

    this.#pointViewComponent = new PointView({
      point: this.#point,
      onOpenClick: this.#handleOpenClick
    });

    this.#pointEditComponent = new EditView({
      point: this.#point,
      onCloseClick: this.#handleCloseClick
    });

    render(this.#pointViewComponent, this.#pointListContainer);
  }

  #changePointToEditView = () => {
    replace(this.#pointEditComponent, this.#pointViewComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #changePointToReadView = () => {
    replace(this.#pointViewComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#changePointToReadView();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleOpenClick = () => {
    this.#changePointToEditView();
  };

  #handleCloseClick = () => {
    this.#changePointToReadView();
  };
}
