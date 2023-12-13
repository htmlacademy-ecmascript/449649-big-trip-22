import dayjs from 'dayjs';
import {getRandomInteger} from '../util.js';
import {generateOffers} from './offer.js';
import {generateDestination} from './destination.js';

const POINT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const generateDate = () => {
  const maxMinutesGap = 14400;
  const minutesGap = getRandomInteger(-maxMinutesGap, maxMinutesGap);
  const dateFrom = dayjs().add(minutesGap, 'minute');
  const dateTo = dateFrom.add(30, 'minute');

  return {
    dateFrom: dateFrom.toDate(),
    dateTo: dateTo.toDate(),
  };
};

const generatePoint = () => {
  const { dateFrom, dateTo } = generateDate();

  return {
    basePrice: getRandomInteger(1, 50) * 10,
    dateFrom,
    dateTo,
    destination: generateDestination(),
    id: 0,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: generateOffers(),
    type: POINT_TYPES[getRandomInteger(0, POINT_TYPES.length - 1)],
  };
};

export {generatePoint};
