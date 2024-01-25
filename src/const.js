
const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_DAY = 86400000;

const DateFormat = {
  DATE_PICKER: 'd/m/y H:i',
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM DD',
  HOUR_MINUTES: 'HH:mm',
  DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  MINUTES_WITH_POSTFIX: 'mm[M]',
  HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
};

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
  INIT: 'INIT'
};

const LoadingStatus = {
  LOAD: 'load',
  FAILED_LOAD: 'Failed to load',
};

const AppMessage = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now',
  [LoadingStatus.LOAD]: 'Loading...',
  [LoadingStatus.FAILED_LOAD]: 'Failed to load latest route information',
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

const DATE_CONFIG = {
  dateFormat: DateFormat.DATE_PICKER,
  enableTime: true,
  'time_24hr': true,
  locale: { firstDayOfWeek: 1 },
  allowInput: true
};

const DEFAULT_POINT = {
  price: 0,
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: [],
  type: PointType.FLIGHT
};

const BaseUrl = {
  POINTS: 'points',
  DESTINATIONS: 'destinations',
  OFFERS: 'offers',
};

const ApiMetod = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const POINT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DEFAULT_POINT_TYPE = PointType.FLIGHT;

export {
  MILLISECONDS_IN_DAY,
  MILLISECONDS_IN_HOUR,
  DateFormat,
  FilterType,
  SortType,
  PointType,
  UserAction,
  UpdateType,
  BaseUrl,
  ApiMetod,
  LoadingStatus,
  AppMessage,
  DEFAULT_POINT_TYPE,
  POINT_TYPES,
  DATE_CONFIG,
  DEFAULT_POINT
};
