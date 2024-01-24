import { getAllDestinations } from '../mock/destination.js';
import Observable from '../framework/observable.js';

export default class DestinationsModel extends Observable {
  #destinations = getAllDestinations();

  get destinations() {
    return this.#destinations;
  }
}
