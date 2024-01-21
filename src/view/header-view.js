import AbstractView from '../framework/view/abstract-view';
import { formatDate } from '../utilities';

const MAX_DESTINATIONS_TO_RENDER = 3;

const createHeaderTemplate = ({totalPrice, destinationNames, points}) => {
  const destinations = Array.from(new Set(destinationNames));
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${destinations.length > MAX_DESTINATIONS_TO_RENDER ? `${destinations[0]} &mdash;...&mdash; ${destinations[destinations.length - 1]}` : destinations.join(' &mdash; ')}</h1>
        <p class="trip-info__dates">${formatDate(points[0].dateFrom)}&nbsp;&mdash;&nbsp;${formatDate(points[points.length - 1].dateTo)}</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
    </section>`
  );
};

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
    return this.#points.map((point) => this.#destinations.find((dest) => dest.id === point.destination).name);
  }
}
