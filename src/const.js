import { availlableDestinations } from './mock/destination';
import { generateOffersByTypes } from './mock/offer';

const FILTER_TYPES = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SORT_TYPES = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
  DISABLED: 'disabled'
};

const POINT_TYPES = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  TRANSPORT: 'transport',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECKIN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTARAUNT: 'restaurant'
};

const AVAILLABLE_DESTINATIONS = availlableDestinations();

const OFFERS_BY_TYPES = generateOffersByTypes();

export { FILTER_TYPES, SORT_TYPES, POINT_TYPES, AVAILLABLE_DESTINATIONS, OFFERS_BY_TYPES };
