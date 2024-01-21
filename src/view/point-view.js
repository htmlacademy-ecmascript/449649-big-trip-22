import AbstractView from '../framework/view/abstract-view';
import { formatDate, formatTime, getTimeDiff } from '../utilities.js';
import dayjs from 'dayjs';

const createFavoriteIcon = (isFavorite = false) => (
  `<button class="event__favorite-btn ${isFavorite === true ? 'event__favorite-btn--active' : ''}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>`
);

const createPointViewTemplate = (point, allDestinations, allOffers) => {
  const { dateFrom, dateTo, basePrice, type, destination, offers, isFavorite } = point;
  const offersForEventType = allOffers.find((offer) => offer.type === type);
  const destinationInfo = allDestinations.find((dest) => dest.id === destination);

  const month = formatDate(dateFrom, 'MMM DD');
  const startTime = formatTime(dateFrom);
  const endTime = formatTime(dateTo);
  const diff = getTimeDiff(dateFrom, dateTo);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dayjs(dateFrom).format('YYYY-MM-DD')}">${month}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destinationInfo.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs(dateFrom).format('YYYY-MM-DDTHH:mm')}">${startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${dayjs(dateTo).format('YYYY-MM-DDTHH:mm')}">${endTime}</time>
          </p>
          <p class="event__duration">${diff}M</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        ${offersForEventType && offersForEventType.offers ? offersForEventType.offers.map((offer) => {
      if (offers && offers.includes && offers.includes(offer.id)) {
        return (`
          <li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </li>`);
      }
    }).join('') : ''}
      </ul>
        ${createFavoriteIcon(isFavorite)}
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class PointView extends AbstractView {
  #point = null;
  #allDestinations = null;
  #allOffers = null;
  #handleOpenClick = null;
  #handleFavoriteClick = null;

  constructor({ point, allDestinations, allOffers, onOpenClick, onFavoriteClick }) {
    super();
    this.#point = point;
    this.#allDestinations = allDestinations;
    this.#allOffers = allOffers;
    this.#handleOpenClick = onOpenClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#openClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointViewTemplate(this.#point, this.#allDestinations, this.#allOffers);
  }

  #openClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleOpenClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
