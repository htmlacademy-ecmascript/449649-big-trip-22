import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import he from 'he';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { POINT_TYPES, DATE_CONFIG, DateFormat } from '../const.js';
import { getElementsById, humanizeDate } from '../utilities.js';

const createOffersTemplate = (pointTypeOffers, offers, isDisabled) => (`
<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
  ${pointTypeOffers.offers.map((offer) => (
    `<div class="event__offer-selector">
      <input
        class="event__offer-checkbox  visually-hidden"
        id="event-offer-${offer.title}-${offer.id}"
        type="checkbox"
        name="event-offer-${offer.title}"
        data-id="${offer.id}"
        ${offers.includes(offer.id) ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}>
      <label class="event__offer-label" for="event-offer-${offer.title}-${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
  )
  ).join('')
  }
  </div>
</section>`);

const createFieldDestination = (type, name, allDestinations, isDisabled) =>
  `<div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
      ${type}
    </label>
    <input
      class="event__input  event__input--destination"
      id="event-destination-1"
      type="text"
      name="event-destination"
      required
      value="${he.encode(name)}"
      list="destination-list-1"
      ${isDisabled ? 'disabled' : ''}>
    <datalist id="destination-list-1">
      ${allDestinations.map((element) => (`<option value="${element.name}"></option>`)).join('')}
    </datalist>
  </div>`;

const createPicturesTemplate = (pictures) => {
  const createPictureTemplate = pictures?.map((photo, index) => (
    `<img class="event__photo" src="${photo.src}" alt="Event photo ${index + 1}">`
  )).join('');

  return pictures.length > 0
    ? `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${createPictureTemplate}
        </div>
      </div>`
    : '';
};

const createDestinationTemplate = (destination) => {
  const { description, pictures = [] } = destination || { description: '', pictures: [] };
  return description.length > 0 || pictures.length > 0
    ? `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">
          Destination
        </h3>
        <p class="event__destination-description">${description}</p>
        ${pictures ? createPicturesTemplate(pictures) : ''}
      </section>`
    : '';
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
      ${POINT_TYPES.map((item) => createPointTypeItem(item)).join('')}
    </fieldset>
  </div>`;
};

const createFieldType = (type, isDisabled) => `
	<div class="event__type-wrapper">
		<label class="event__type  event__type-btn" for="event-type-toggle-1">
			<span class="visually-hidden">Choose event type</span>
			<img class="event__type-icon" width="17" height="17"
      src="img/icons/${type}.png"
      alt="Event type icon">
		</label>
		<input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" ${isDisabled ? 'disabled' : ''}>
		  ${createPointTypeList(type)}
	</div>
`;

const createFieldSchedule = (point) => {
  const { dateFrom, dateTo, isDisabled } = point;

  return (`
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input
        class="event__input  event__input--time"
        id="event-start-time-1"
        type="text"
        name="event-start-time"
        value="${humanizeDate(dateFrom, DateFormat.DAY_MONTH_YEAR)}"
        ${isDisabled ? 'disabled' : ''}
        >
      —
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input
        class="event__input  event__input--time"
        id="event-end-time-1"
        type="text"
        name="event-end-time"
        value="${humanizeDate(dateTo, DateFormat.DAY_MONTH_YEAR)}"
        ${isDisabled ? 'disabled' : ''}
        >
    </div>
  `);
};

const createFieldPrice = (basePrice, isDisabled) => (`
  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
        €
      </label>
      <input
        class="event__input  event__input--price"
        id="event-price-1"
        type="number"
        min="1"
        max="100000"
        name="event-price"
        value="${basePrice}"
        ${isDisabled ? 'disabled' : ''}
        required>
    </div>
  `);

const createButtonSubmit = (isSaving) =>
  `<button
    class="event__save-btn  btn  btn--blue"
    type="submit" ${isSaving ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}
  </button>`;

const createButtonCancelOrDelete = (id, isDisabled, isSaving, isDeleting) => {
  const createCancelOrDelete = () => {
    if (id === undefined) {
      return 'Cancel';
    }

    return isDeleting ? 'Deleting...' : 'Delete';
  };

  return (
    `<button
      class="event__reset-btn"
      type="reset" ${isDisabled || isSaving ? 'disabled' : ''}>
      ${id === 0 ? 'Cancel' : createCancelOrDelete()}
    </button>`
  );
};

const createRollupButton = (isDisabled) => `
<button class="event__rollup-btn" type="button" ${isDisabled ? 'disabled' : ''}>
  <span class="visually-hidden">Open event</span>
</button>`;

const createEditViewTemplate = (state, allOffers, allDestinations) => {
  const point = state;
  const { id, basePrice, destination, offers, type, isDisabled, isDeleting, isSaving } = point;
  const pointTypeOffers = allOffers.find((offer) => offer.type === type);
  const destinationInfo = getElementsById(allDestinations, destination);
  const { name } = destinationInfo || { name: '' };

  const offersByType = (allOffers?.find((item) => item.type === point.type) ?? {}).offers;
  const hasOffers = offersByType?.length > 0;

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${createFieldType(type, isDisabled)}
          ${createFieldDestination(type, name, allDestinations, isDisabled)}
          ${createFieldSchedule(point)}
          ${createFieldPrice(basePrice, isDisabled)}
          ${createButtonSubmit(isDisabled, isSaving)}
          ${createButtonCancelOrDelete(id, isDisabled, isSaving, isDeleting)}
          ${createRollupButton(isDisabled)}
        </header>
        <section class="event__details">
          ${hasOffers ? createOffersTemplate(pointTypeOffers, offers, isDisabled) : ''}
          ${createDestinationTemplate(destinationInfo, isDisabled)}
        </section>
      </form>
    </li>`
  );
};

export default class EditView extends AbstractStatefulView {
  #allOffers = null;
  #allDestinations = null;
  #handleCloseClick = null;
  #handleDeleteClick = null;
  #handleFormSubmit = null;
  #datepickerFrom = null;
  #datepickerTo = null;

  constructor({ point, allOffers, allDestinations, onCloseClick, onDeleteClick, onFormSubmit }) {
    super();
    this._setState({ ...point, isSaving: false, isDeleting: false });
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
    this.#handleCloseClick = onCloseClick;
    this.#handleDeleteClick = onDeleteClick;
    this.#handleFormSubmit = onFormSubmit;

    this._restoreHandlers();
  }

  get template() {
    return createEditViewTemplate(this._state, this.#allOffers, this.#allDestinations);
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeClickHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#deleteClickHandler);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__available-offers')?.addEventListener('change', this.#offerChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceChangeHandler);
    this.#setDatepickers();
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

    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point;
  }

  #typeChangeHandler = (evt) => {
    this.updateElement({
      type: evt.target.value
    });
  };

  #destinationChangeHandler = (evt) => {
    const selectedDestination = this.#allDestinations.find((pointDestination) => pointDestination.name.toLowerCase() === evt.target.value.toLowerCase());
    if (selectedDestination) {
      this.updateElement({
        destination: selectedDestination.id
      });
    }
  };

  #offerChangeHandler = () => {
    this._setState({
      offers: [...this.element.querySelectorAll('.event__offer-checkbox:checked')].map((item) => item.dataset.id)
    });
  };


  #priceChangeHandler = (evt) => {
    this._setState({
      basePrice: Number(evt.target.value)
    });
  };

  #dateFromCloseHandler = ([date]) => {
    this._setState({
      dateFrom: date.toISOString(),
    });
    this.#datepickerTo.set('minDate', this._state.dateFrom);
  };

  #dateToCloseHandler = ([date]) => {
    this._setState({
      dateTo: date.toISOString(),
    });
    this.#datepickerFrom.set('maxDate', this._state.dateTo);
  };

  #setDatepickers = () => {
    const [dateFromElement, dateToElement] = this.element.querySelectorAll('.event__input--time');
    this.#datepickerFrom = flatpickr(
      dateFromElement,
      {
        ...DATE_CONFIG,
        defaultDate: this._state.dateFrom || '',
        onChange: this.#dateFromCloseHandler,
        maxDate: this._state.dateTo,
      }
    );
    this.#datepickerTo = flatpickr(
      dateToElement,
      {
        ...DATE_CONFIG,
        defaultDate: this._state.dateTo || '',
        onChange: this.#dateToCloseHandler,
        minDate: this._state.dateFrom,
      }
    );
  };

  #closeClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseClick(EditView.parseStateToPoint(this._state));
  };

  #deleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(EditView.parseStateToPoint(this._state));
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditView.parseStateToPoint(this._state));
  };
}
