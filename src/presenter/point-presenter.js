import { remove, render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utilities.js';
import PointView from '../view/point-view.js';
import EditView from '../view/edit-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #pointViewComponent = null;
  #pointEditComponent = null;
  #point = null;
  #mode = Mode.DEFAULT;

  constructor({pointListContainer, onDataChange, onModeChange}) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
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

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointViewComponent, prevPointViewComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointViewComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointViewComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#changePointToReadView();
    }
  }

  #changePointToEditView = () => {
    replace(this.#pointEditComponent, this.#pointViewComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  };

  #changePointToReadView = () => {
    replace(this.#pointViewComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
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
