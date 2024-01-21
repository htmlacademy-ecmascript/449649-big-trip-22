import { remove, render, RenderPosition } from '../framework/render.js';
import NewPointView from '../view/new-point-view.js';
import { nanoid } from 'nanoid';
import { UserAction, UpdateType } from '../const.js';

export default class NewPointPresenter {
  #pointListContainer = null;
  #allOffers = null;
  #allDestinations = null;
  #handleDataChange = null;
  #handleResetForm = null;
  #newPointComponent = null;

  constructor({ pointListContainer, allOffers, allDestinations, onDataChange, onResetForm }) {
    this.#pointListContainer = pointListContainer;
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
    this.#handleDataChange = onDataChange;
    this.#handleResetForm = onResetForm;
  }

  init() {
    this.#newPointComponent = new NewPointView({
      offers: this.#allOffers,
      destinations: this.#allDestinations,
      onFormSubmit: this.#handleFormSubmit,
      onFormReset: this.#closeNewPointForm
    });
    render(this.#newPointComponent, this.#pointListContainer, RenderPosition.AFTERBEGIN);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(UserAction.ADD_EVENT, UpdateType.MAJOR, {id: nanoid, ...point});
    this.#closeNewPointForm();
  };

  #closeNewPointForm = () => {
    remove(this.#newPointComponent);
    this.#handleResetForm();
  };
}
