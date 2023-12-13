import {getRandomInteger} from '../util.js';

const generateOffer = () => {
  const titles = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'];
  const prices = [5, 15, 30, 40, 50, 80, 100];

  return {
    title: titles[getRandomInteger(0, titles.length - 1)],
    price: prices[getRandomInteger(0, prices.length - 1)]
  };
};

const generateOffers = () => {
  const offersCount = getRandomInteger(0, 5);
  return {
    offers: new Array(offersCount).fill().map(generateOffer)
  };
};

export {generateOffers};
