export default class OffersModel {
  #offers = null;

  constructor(offers) {
    this.#offers = offers;
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
