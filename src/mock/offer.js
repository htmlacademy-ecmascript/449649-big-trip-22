import { getRandomInteger } from './util.js';

const OFFER_TYPES = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'];

const generateOffer = () => {
  const prices = [5, 15, 30, 40, 50, 80, 100];

  return {
    title: OFFER_TYPES[getRandomInteger(0, OFFER_TYPES.length - 1)],
    price: prices[getRandomInteger(0, prices.length - 1)]
  };
};

const generateOffers = () => Array.from({ length: getRandomInteger(0, 5) }, generateOffer);

export { generateOffers };
