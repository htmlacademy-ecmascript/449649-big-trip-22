import { remove, render, RenderPosition } from '../framework/render.js';
import { isEscapeKey } from '../utilities.js';
import EditView from '../view/edit-view.js';
import { UserAction, UpdateType, DEFAULT_POINT } from '../const.js';

export default class NewPointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #newPointComponent = null;
  #handleResetForm = null;
  #pointsModel = null;
  #point = [];

  constructor({ pointListContainer, pointsModel, onDataChange, onResetForm }) {
    this.#pointListContainer = pointListContainer;
    this.#pointsModel = pointsModel;
    this.#point = DEFAULT_POINT;
    this.#handleDataChange = onDataChange;
    this.#handleResetForm = onResetForm;
  }

  init() {
    if (this.#newPointComponent !== null) {
      return;
    }

    this.#newPointComponent = new EditView({
      point: this.#point,
      allOffers: this.#pointsModel.offers,
      allDestinations: this.#pointsModel.destinations,
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

  setSaving() {
    this.#newPointComponent.updateElement({
      isDisabled: true,
      isSaving: true
    });
  }

  setAborting() {
    if (this.#newPointComponent === null) {
      return;
    }

    const resetFormState = () => {
      this.#newPointComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false
      });
    };

    this.#newPointComponent.shake(resetFormState);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(UserAction.ADD_POINT, UpdateType.MAJOR, point);
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
