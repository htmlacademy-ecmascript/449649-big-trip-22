import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import dayjs from 'dayjs';
import { DEFAULT_POINT_TYPE, TYPES_POINTS } from '../const.js';

const BLANK_POINT = {
  type: DEFAULT_POINT_TYPE,
  dateFrom: dayjs().toDate(),
  dateTo: dayjs().toDate(),
  basePrice: 0,
  offers: [],
  destination: {
    name: '',
    description: '',
    pictures: [],
  },
};

const createOffersTemplate = ({ offersByType, point }) => (`
<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
  ${offersByType.map((offer) => {
    const checked = point.offers.includes(offer.id) ? 'checked' : '';
    return (
      `<div class="event__offer-selector">
        <input
          class="event__offer-checkbox  visually-hidden"
          id="event-offer-${offer.id}"
          type="checkbox"
          name="event-offer-${offer.id}"
          data-offer-id=${offer.id} ${checked}
        >
        <label class="event__offer-label" for="event-offer-${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`);
  }).join('')
  }
  </div>
</section>`);

const createListTitlesTemplate = (allDestinations) => {
  const titles = Array.from(new Set(allDestinations.map((destination) => destination.name)));
  return `
    <datalist id="destination-list-1">
      ${titles.map((title) => `<option value="${title}"></option>`).join('')}
    </datalist>
  `;
};


const createFieldDestination = (type, name, allDestinations) =>
  `<div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input
        class="event__input  event__input--destination"
        id="event-destination-1" type="text"
        name="event-destination"
        value="${name}"
        list="destination-list-1"
      >
      ${createListTitlesTemplate(allDestinations)}
    </div>`;

const createPicturesTemplate = (pictures) => {
  const createPictureTemplate = pictures.map((photo, index) => (
    `<img class="event__photo" src="${photo.src}" alt="Event photo ${index + 1}">`
  )).join('');

  return (
    `<div class="event__photos-container">
      <div class="event__photos-tape">
        ${createPictureTemplate}
      </div>
    </div>`
  );
};

const createDestinationTemplate = (destinationById) => {
  const { description, pictures = [] } = destinationById;
  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">
        Destination
      </h3>
      <p class="event__destination-description">${description}</p>
      ${pictures ? createPicturesTemplate(pictures) : ''}
    </section>
  `;
};

const createPointTypeList = (type) => {
  const createPointTypeItem = (item) => `
  <div class="event__type-item">
    <input id="event-type-${item.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.toLowerCase()}"
    ${item === type ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${item.toLowerCase()}" for="event-type-${item.toLowerCase()}-1">${item}</label>
  </div>
  `;

  return `
  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${TYPES_POINTS.map((item) => createPointTypeItem(item)).join('')}
    </fieldset>
  </div>`;
};

const createFieldType = (type) => `
	<div class="event__type-wrapper">
		<label class="event__type  event__type-btn" for="event-type-toggle-1">
			<span class="visually-hidden">Choose event type</span>
			<img class="event__type-icon" width="17" height="17"
      src="img/icons/${type}.png"
      alt="Event type icon">
		</label>
		<input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
		  ${createPointTypeList(type)}
	</div>
`;

const createFieldSchedule = (point) => {
  const { dateFrom, dateTo } = point;

  return (`
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input
        class="event__input  event__input--time"
        id="event-start-time-1"
        type="text"
        name="event-start-time"
        value="${dayjs(dateFrom).format('DD/MM/YY HH:mm')}">
      —
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input
        class="event__input  event__input--time"
        id="event-end-time-1"
        type="text"
        name="event-end-time"
        value="${dayjs(dateTo).format('DD/MM/YY HH:mm')}">
    </div>
  `);
};

const createFieldPrice = (point) => {
  const { basePrice } = point;

  return (`
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        €
      </label>
      <input
        class="event__input  event__input--price"
        id="event-price-1"
        type="number"
        min="0"
        name="event-price"
        value="${basePrice}">
    </div>
  `);
};

const createButtonSubmit = (isDisabled, isSaving) =>
  `<button
    class="event__save-btn  btn  btn--blue"
    type="submit" ${isDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}
  </button>`;

const createButtonCancel = () =>
  `<button
      class="event__reset-btn"
      type="reset">
        Cancel
    </button>`;

const createEditViewTemplate = ({ state, allOffers, allDestinations }) => {
  const point = state;
  const { type, destination } = point;
  const offersByType = (allOffers?.find((item) => item.type === point.type) ?? {}).offers;
  const hasOffers = offersByType?.length > 0;
  const destinationById = allDestinations.find((item) => item.id === destination.id);
  const hasDestination = destinationById !== undefined;
  const { name } = destinationById || {};
  const { isDisabled, isSaving } = state;

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${createFieldType(type)}
          ${createFieldDestination(type, name, allDestinations)}
          ${createFieldSchedule(point)}
          ${createFieldPrice(point)}
          ${createButtonSubmit(isDisabled, isSaving)}
          ${createButtonCancel()}
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${hasOffers ? createOffersTemplate({ offersByType, point }) : ''}
          ${hasDestination ? createDestinationTemplate(destinationById) : ''}
        </section>
      </form>
    </li>`
  );
};

export default class EditView extends AbstractStatefulView {
  #allOffers = null;
  #allDestinations = null;
  #handleCloseClick = null;
  #handleCancelClick = null;
  #handleFormSubmit = null;

  constructor({ point = BLANK_POINT, allOffers, allDestinations, onCloseClick, onCancelClick, onFormSubmit }) {
    super();
    this._state = EditView.parsePointToState(point);
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
    this.#handleCloseClick = onCloseClick;
    this.#handleCancelClick = onCancelClick;
    this.#handleFormSubmit = onFormSubmit;

    this._restoreHandlers();
  }

  get template() {
    return createEditViewTemplate({
      state: this._state,
      allOffers: this.#allOffers,
      allDestinations: this.#allDestinations
    });
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeClickHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#cancelClickHandler);
    this.element.querySelector('.event__save-btn').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__available-offers')?.addEventListener('change', this.#offerChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceChangeHandler);
  }

  reset(point) {
    this.updateElement(
      EditView.parsePointToState(point)
    );
  }

  static parsePointToState(point) {
    return {
      ...point,
      isDisabled: false,
      isSaving: false,
      isDeleting: false
    };
  }

  static parseStateToPoint(state) {
    const point = { ...state };
    return point;
  }

  #typeChangeHandler = (evt) => {
    this.updateElement({
      type: evt.target.value,
      offer: []
    });
  };

  #destinationChangeHandler = (evt) => {
    const selectedDestination = this.#allDestinations.find((pointDestination) => pointDestination.name === evt.target.value);
    this.updateElement({
      destination: selectedDestination
    });
  };

  #offerChangeHandler = () => {
    const checkedBoxes = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));
    this._setState({
      offers: checkedBoxes.map((element) => +(element.dataset.offerId))
    });
  };

  #priceChangeHandler = (evt) => {
    this._setState({
      basePrice: evt.target.value
    });
  };

  #closeClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseClick(EditView.parseStateToPoint(this._state));
  };

  #cancelClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCancelClick(EditView.parseStateToPoint(this._state));
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditView.parseStateToPoint(this._state));
  };
}
