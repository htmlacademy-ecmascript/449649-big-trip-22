import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import { getRandomInteger } from './util.js';
import { getOffersByType } from './offer.js';
import { AVAILLABLE_DESTINATIONS } from '../const.js';

const POINT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const generateDate = () => {
  const maxMinutesGap = getRandomInteger(0, 60 * 24);
  const minutesGap = getRandomInteger(-maxMinutesGap, maxMinutesGap);
  const dateFrom = dayjs().add(minutesGap, 'minute');
  const dateTo = dateFrom.add(getRandomInteger(20, 60), 'minute');

  return {
    dateFrom: dateFrom.toDate(),
    dateTo: dateTo.toDate(),
  };
};

const generatePoint = () => {
  const { dateFrom, dateTo } = generateDate();
  const type = POINT_TYPES[getRandomInteger(0, POINT_TYPES.length - 1)];
  const offers = getOffersByType(type.toLowerCase());
  return {
    basePrice: getRandomInteger(1, 50) * 10,
    dateFrom,
    dateTo,
    destination: AVAILLABLE_DESTINATIONS[getRandomInteger(0, AVAILLABLE_DESTINATIONS.length - 1)],
    id: nanoid(),
    type: type.toLowerCase(),
    offers: offers,
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

export { generatePoint };
