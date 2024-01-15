import { availlableDestinations } from './mock/destination';
import { generateOffers } from './mock/offer';

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

const TYPES_POINTS = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant'
];

const DEFAULT_POINT_TYPE = POINT_TYPES.FLIGHT;

const AVAILLABLE_DESTINATIONS = availlableDestinations();

const OFFERS = generateOffers();

export { FILTER_TYPES, SORT_TYPES, POINT_TYPES, AVAILLABLE_DESTINATIONS, OFFERS, DEFAULT_POINT_TYPE, TYPES_POINTS };
