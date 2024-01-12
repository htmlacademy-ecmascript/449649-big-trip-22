import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import dayjs from 'dayjs';
import { POINT_TYPES, OFFERS_BY_TYPES, AVAILLABLE_DESTINATIONS } from '../const.js';

const BLANK_POINT = {
  type: '',
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

const createOfferName = (offer = {}) => {
  let offerName = '';
  switch (offer.title) {
    case 'Add luggage':
      offerName = 'luggage';
      break;
    case 'Switch to comfort':
      offerName = 'comfort';
      break;
    case 'Add meal':
      offerName = 'meal';
      break;
    case 'Choose seats':
      offerName = 'seats';
      break;
    case 'Travel by train':
      offerName = 'train';
      break;
    default:
      offerName = '';
  }

  return offerName;
};

const createPointOfferSelector = (point = {}) => {
  const availableOffers = OFFERS_BY_TYPES[point.type] || [];

  return availableOffers.map((offer) =>
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox visually-hidden" id="event-offer-${createOfferName(offer)}-1" type="checkbox" name="event-offer-${createOfferName(offer)}" ${offer.isSelected ? 'checked ' : ''}>
      <label class="event__offer-label" for="event-offer-${createOfferName(offer)}-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`).join('');
};

const createPointSectionOffers = (point) => (
  `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
      ${createPointOfferSelector(point)}
    </div>
  </section>`
);

const createDestinationFieldHtml = (point) => {
  const destinationOptions = AVAILLABLE_DESTINATIONS.reduce((optionsList, destGroup) => {
    if (Array.isArray(destGroup.pictures)) {
      const destinationHtml = destGroup.pictures.map((dest) => (
        `<option value="${dest.name}" data-id="${dest.id}">${dest.name}</option>`
      )).join('');

      return optionsList + destinationHtml;
    } else {
      return optionsList;
    }
  }, '');

  return (`
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${point.type}
      </label>

      <input
        class="event__input  event__input--destination"
        id="event-destination-1"
        type="text"
        name="event-destination"
        value="${point.destination.name}"
        list="destination-list-1">

      <datalist id="destination-list-1">
        ${destinationOptions}
      </datalist>
    </div>
  `);
};


const createPointSectionDestination = (point) => (
  `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${point.destination.description}</p>
  </section>`
);

const createPointTypeItem = (eventTypes) => {
  const types = Object.values(eventTypes);

  return types.map((type) =>
    `<div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type[0].toUpperCase() + type.substring(1)}</label>
    </div>`).join('');
};

const createScheduleFieldHtml = (point) => {
  const {dateFrom, dateTo} = point;

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

const createPriceFieldHtml = (point) => {
  const {basePrice} = point;

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

const createSubmitButtonHtml = () =>
  `<button
      class="event__save-btn  btn  btn--blue"
      type="submit">
        Save
    </button>
`;

const createCancelButtonHtml = () =>
  `<button
      class="event__reset-btn"
      type="reset">
        Cancel
    </button>
`;

const createEditViewTemplate = (point = {}) => {
  const hasOffers = point.offers !== null;
  const hasDestination = point.destination !== null;

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createPointTypeItem(POINT_TYPES)}
              </fieldset>
            </div>
          </div>

          ${hasDestination ? createDestinationFieldHtml(point) : ''}
          ${createScheduleFieldHtml(point)}
          ${createPriceFieldHtml(point)}
          ${createSubmitButtonHtml()}
          ${createCancelButtonHtml()}
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
            ${hasOffers ? createPointSectionOffers(point) : ''}
            ${hasDestination ? createPointSectionDestination(point) : ''}
          </section>
        </section>
      </form>
    </li>`
  );
};

export default class EditView extends AbstractStatefulView {
  #handleCloseClick = null;

  constructor({ point = BLANK_POINT, onCloseClick }) {
    super();
    this._state = EditView.parsePointToState(point);
    this.#handleCloseClick = onCloseClick;

    this._restoreHandlers();
  }

  get template() {
    return createEditViewTemplate(this._state);
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeClickHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSubmitHandler);
    this.element.querySelectorAll('.event__type-group').forEach((input) => input.addEventListener('change', this.#typeSelectClickHandler));
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationSelectClickHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputHandler);
  }

  reset(point) {
    this.updateElement(
      EditView.parsePointToState(point)
    );
  }

  #closeClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseClick(EditView.parseStateToPoint(this._state));
  };

  static parsePointToState(point) {
    return {...point,
      type: point.type,
      hasOffers: point.offers !== null,
      offers: point.offers,
      hasDestination: point.destination !== null && point.destination.description.length > 0,
      destination: point.destination,
    };
  }

  static parseStateToPoint(state) {
    delete state.type;
    delete state.hasOffers;
    delete state.offers;
    delete state.hasDestination;
    delete state.destination;
    return state;
  }

  #typeSelectClickHandler = (evt) => {
    evt.preventDefault();

    if (evt.target.value === this._state.type) {
      return;
    }

    this.updateElement({
      type: evt.target.value,
      offers: OFFERS_BY_TYPES[evt.target.value],
    });
  };

  #destinationSelectClickHandler = (evt) => {
    const selectedDestinationName = evt.target.value;
    let selectedDestination = null;

    for (const city in AVAILLABLE_DESTINATIONS) {
      if (AVAILLABLE_DESTINATIONS[city].name === selectedDestinationName) {
        selectedDestination = AVAILLABLE_DESTINATIONS[city];
        break;
      }
    }

    if (selectedDestination) {
      this.updateElement({
        destination: {
          id: selectedDestination.id,
          name: selectedDestination.name,
          description: selectedDestination.description,
          pictures: selectedDestination.pictures
        }
      });
    }
  };

  #priceInputHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: evt.target.value
    });
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseClick(EditView.parseStateToPoint(this._state));
  };
}
