import { remove, render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utilities.js';
import PointView from '../view/point-view.js';
import EditView from '../view/edit-view.js';
import {UserAction, UpdateType} from '../const.js';

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
  #destinationsModel = null;
  #offersModel = null;
  #allOffers = null;
  #allDestinations = null;
  #point = null;
  #mode = Mode.DEFAULT;

  constructor({pointListContainer, onDataChange, onModeChange}) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init (point, offers, destinations) {
    this.#point = point;
    this.#allOffers = offers;
    this.#allDestinations = destinations;

    const prevPointViewComponent = this.#pointViewComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointViewComponent = new PointView({
      point: this.#point,
      allDestinations: this.#allDestinations,
      allOffers: this.#allOffers,
      onOpenClick: this.#handleOpenClick,
      onCancelClick: this.#handleCloseClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#pointEditComponent = new EditView({
      point: this.#point,
      allOffers: this.#allOffers,
      allDestinations: this.#allDestinations,
      onCloseClick: this.#handleCloseClick,
      onDeleteClick: this.#handleDeleteClick,
      onFormSubmit: this.#handleFormSubmit
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
      this.#pointEditComponent.reset(this.#point);
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
    this.#pointEditComponent.reset(this.#point);
    this.#changePointToReadView();
  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(UserAction.DELETE_POINT, UpdateType.MINOR, point);
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.MINOR, point);
    this.#changePointToReadView();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.MINOR, {...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
