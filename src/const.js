import { availlableDestinations } from './mock/destination';
import { generateOffers } from './mock/offer';

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const PointType = {
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

const DEFAULT_POINT_TYPE = PointType.FLIGHT;

const AVAILLABLE_DESTINATIONS = availlableDestinations();

const OFFERS = generateOffers();

export { FilterType, SortType, PointType, UserAction, UpdateType, AVAILLABLE_DESTINATIONS, OFFERS, DEFAULT_POINT_TYPE, TYPES_POINTS };
