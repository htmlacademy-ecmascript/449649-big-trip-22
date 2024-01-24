import { remove, render, RenderPosition } from '../framework/render.js';
import { isEscapeKey } from '../utilities.js';
import EditView from '../view/edit-view.js';
import { nanoid } from 'nanoid';
import { UserAction, UpdateType, DEFAULT_POINT } from '../const.js';

export default class NewPointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #newPointComponent = null;
  #allOffers = null;
  #allDestinations = null;
  #handleResetForm = null;
  #pointsModel = null;
  #points = [];

  constructor({ pointListContainer, pointsModel, allOffers, allDestinations, onDataChange, onResetForm }) {
    this.#pointListContainer = pointListContainer;
    this.#pointsModel = pointsModel;
    this.#points = DEFAULT_POINT;
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
    this.#handleDataChange = onDataChange;
    this.#handleResetForm = onResetForm;
  }

  init() {
    if (this.#newPointComponent !== null) {
      return;
    }

    this.#newPointComponent = new EditView({
      point: this.#points,
      allOffers: this.#allOffers,
      allDestinations: this.#allDestinations,
      onCloseClick: this.#handleCloseClick,
      onDeleteClick: this.#handleDeleteClick,
      onFormSubmit: this.#handleFormSubmit
    });
    render(this.#newPointComponent, this.#pointListContainer, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#newPointComponent === null) {
      return;
    }

    this.#handleResetForm();

    remove(this.#newPointComponent);
    this.#newPointComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #closeNewPointForm = () => {
    remove(this.#newPointComponent);
    this.#handleResetForm();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(UserAction.ADD_POINT, UpdateType.MAJOR, {id: nanoid(), ...point});
    this.#closeNewPointForm();
  };

  #handleCloseClick = () => {
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.destroy();
    }
  };
}
