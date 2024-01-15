export default class DestinationsModel {
  #destinations = null;

  constructor(destinations) {
    this.#destinations = destinations;
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    const findDestination = this.#destinations.find((destination) => destination.id === id);
    return findDestination || null;
  }
}
