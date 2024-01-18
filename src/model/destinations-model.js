import { AVAILLABLE_DESTINATIONS } from '../const.js';
export default class DestinationsModel {
  #destinations = null;

  constructor() {
    this.#destinations = AVAILLABLE_DESTINATIONS;
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    const findDestination = this.#destinations.find((destination) => destination.id === id);
    return findDestination || null;
  }
}
