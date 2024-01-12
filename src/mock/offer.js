import { POINT_TYPES } from '../const.js';
import { nanoid } from 'nanoid';

const generateOffers = (type) => {
  let offers = [];
  switch (type) {
    case POINT_TYPES.TAXI:
      offers = [
        {
          id: nanoid(),
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Choose the radio station',
          price: 60,
          isSelected: true,
        }
      ];
      break;
    case POINT_TYPES.BUS:
      offers = [
        {
          id: nanoid(),
          title: 'Choose seats',
          price: 120,
          isSelected: true,
        }
      ];
      break;
    case POINT_TYPES.TRAIN:
      offers = [
        {
          id: nanoid(),
          title: 'Add meal',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Switch to comfort',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Add luggage',
          price: 60,
          isSelected: true,
        }
      ];
      break;
    case POINT_TYPES.SHIP:
      offers = [
        {
          id: nanoid(),
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Switch to comfort',
          price: 60,
          isSelected: true,
        }
      ];
      break;
    case POINT_TYPES.DRIVE:
      offers = [
        {
          id: nanoid(),
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Choose the radio station',
          price: 60,
          isSelected: true,
        }
      ];
      break;
    case POINT_TYPES.FLIGHT:
      offers = [
        {
          id: nanoid(),
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Switch to comfort',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Choose seats',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Add luggage',
          price: 120,
          isSelected: true,
        },
        {
          id: nanoid(),
          title: 'Travel by train',
          price: 60,
          isSelected: true,
        }
      ];
      break;
    case POINT_TYPES.CHECKIN:
      offers = [
        {
          id: nanoid(),
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: true,
        }
      ];
      break;
    case POINT_TYPES.SIGHTSEEING:
      offers = [];
      break;
    case POINT_TYPES.RESTARAUNT:
      offers = [];
      break;
    default:
      offers = [];
  }

  return offers;
};

const generateOffersByTypes = () => {
  const offersByTypes = {};
  Object.values(POINT_TYPES).forEach((type) => {
    offersByTypes[type] = generateOffers(type);
  });

  return offersByTypes;
};

export { generateOffers, generateOffersByTypes };
