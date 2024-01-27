import AbstractView from '../framework/view/abstract-view';
import { getMinData, getMaxData } from '../utilities';

const MAX_DESTINATIONS_TO_RENDER = 3;

const createTripTitleTemplate = (destinationNames) => (
  `<h1 class="trip-info__title">
    ${destinationNames.length > MAX_DESTINATIONS_TO_RENDER
    ? `${destinationNames[0]} &mdash;...&mdash; ${destinationNames[destinationNames.length - 1]}`
    : destinationNames.join(' &mdash; ')}
  </h1>`
);

const createHeaderTemplate = ({totalPrice, destinationNames, points}) => (
  points !== undefined || points.length !== 0 ?
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${createTripTitleTemplate(destinationNames)}</h1>
        <p class="trip-info__dates">${getMinData(points)}&nbsp;&mdash;&nbsp;${getMaxData(points)}</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
    </section>`
    : ''
);

export default class HeaderView extends AbstractView {
  #points = null;
  #destinations = null;

  constructor({points, destinations}) {
    super();
    this.#points = points;
    this.#destinations = destinations;
  }

  get template() {
    return createHeaderTemplate({
      totalPrice: this.#calculateTotalPrice(),
      destinationNames: this.#getDestinationNames(),
      points: this.#points
    });
  }

  #calculateTotalPrice() {
    return this.#points.reduce((total, point) => {
      const price = parseInt(point.basePrice, 10);
      return isNaN(price) ? total : total + price;
    }, 0);
  }


  #getDestinationNames() {
    const destinationIds = this.#points.map((point) => point.destination);
    const destinationNames = destinationIds.map((id) => {
      const destination = this.#destinations.find((dest) => dest.id === id);
      return destination ? destination.name : null;
    });

    return destinationNames;
  }
}
