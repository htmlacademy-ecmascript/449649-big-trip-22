import { remove, render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utilities.js';
import PointView from '../view/point-view.js';
import EditView from '../view/edit-view.js';

export default class PointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #pointViewComponent = null;
  #pointEditComponent = null;
  #point = null;

  constructor({pointListContainer, onDataChange}) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
  }

  init(point) {
    this.#point = point;

    const prevPointViewComponent = this.#pointViewComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointViewComponent = new PointView({
      point: this.#point,
      onOpenClick: this.#handleOpenClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#pointEditComponent = new EditView({
      point: this.#point,
      onCloseClick: this.#handleCloseClick
    });

    if (prevPointViewComponent === null || prevPointEditComponent === null) {
      render(this.#pointViewComponent, this.#pointListContainer);
      return;
    }

    if (this.#pointListContainer.contains(prevPointEditComponent.element)) {
      replace(this.#pointViewComponent, prevPointViewComponent);
    }

    if (this.#pointListContainer.contains(prevPointEditComponent.element)) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointViewComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointViewComponent);
    remove(this.#pointEditComponent);
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

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
