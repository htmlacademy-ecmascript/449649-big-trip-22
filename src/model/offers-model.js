import { OFFERS } from '../const.js';
export default class OffersModel {
  #offers = null;

  constructor() {
    this.#offers = OFFERS;
  }

  get offers() {
    return this.#offers;
  }

  getByType(type) {
    const foundOffer = this.#offers.find((offer) => offer.type === type);

    if (foundOffer) {
      return foundOffer.offers;
    } else {
      return null;
    }
  }
}
