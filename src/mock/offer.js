import { POINT_TYPES, OFFERS_BY_TYPES } from '../const.js';

const generateOffers = (type) => {
  let offers = [];
  switch (type) {
    case POINT_TYPES.TAXI:
      offers = OFFERS_BY_TYPES.TAXI;
      break;
    case POINT_TYPES.BUS:
      offers = OFFERS_BY_TYPES.BUS;
      break;
    case POINT_TYPES.TRAIN:
      offers = OFFERS_BY_TYPES.TRAIN;
      break;
    case POINT_TYPES.SHIP:
      offers = OFFERS_BY_TYPES.SHIP;
      break;
    case POINT_TYPES.DRIVE:
      offers = OFFERS_BY_TYPES.DRIVE;
      break;
    case POINT_TYPES.FLIGHT:
      offers = OFFERS_BY_TYPES.FLIGHT;
      break;
    case POINT_TYPES.CHECKIN:
      offers = OFFERS_BY_TYPES.CHECKIN;
      break;
    case POINT_TYPES.SIGHTSEEING:
      offers = OFFERS_BY_TYPES.SIGHTSEEING;
      break;
    case POINT_TYPES.RESTARAUNT:
      offers = OFFERS_BY_TYPES.RESTAURANT;
      break;
    default:
      offers = [];
  }

  return offers;
};

export { generateOffers };
