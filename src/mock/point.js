import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import { getRandomInteger } from './util.js';
import { getOffersIds } from './offer.js';
import { getRandomDestinationId } from './destination.js';

const PointType = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

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
  const type = PointType[getRandomInteger(0, PointType.length - 1)];
  return {
    basePrice: getRandomInteger(1, 50) * 100,
    dateFrom,
    dateTo,
    destination: getRandomDestinationId(),
    id: nanoid(),
    type: type.toLowerCase(),
    offers: getOffersIds(type),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

export { generatePoint };
