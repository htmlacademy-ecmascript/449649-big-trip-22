import { POINT_TYPES, OFFERS } from '../const.js';
import { nanoid } from 'nanoid';

const generateOffers = () => {
  const offers = [];

  const pointTypesOrder = [
    POINT_TYPES.TAXI,
    POINT_TYPES.BUS,
    POINT_TYPES.TRAIN,
    POINT_TYPES.SHIP,
    POINT_TYPES.DRIVE,
    POINT_TYPES.FLIGHT,
    POINT_TYPES.CHECKIN,
    POINT_TYPES.SIGHTSEEING,
    POINT_TYPES.RESTARAUNT
  ];

  pointTypesOrder.forEach((type) => {
    let typeOffers = [];

    switch (type) {
      case POINT_TYPES.TAXI:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Choose the radio station',
            price: 60
          }
        ];
        break;
      case POINT_TYPES.BUS:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Choose seats',
            price: 120
          }
        ];
        break;
      case POINT_TYPES.TRAIN:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Add meal',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Switch to comfort',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Add luggage',
            price: 60
          }
        ];
        break;
      case POINT_TYPES.SHIP:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Switch to comfort',
            price: 60
          }
        ];
        break;
      case POINT_TYPES.DRIVE:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Choose the radio station',
            price: 60
          }
        ];
        break;
      case POINT_TYPES.FLIGHT:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Switch to comfort',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Choose seats',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Add luggage',
            price: 120
          },
          {
            id: nanoid(),
            title: 'Travel by train',
            price: 60
          }
        ];
        break;
      case POINT_TYPES.CHECKIN:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Upgrade to a business class',
            price: 120
          }
        ];
        break;
      case POINT_TYPES.SIGHTSEEING:
        typeOffers = [];
        break;
      case POINT_TYPES.RESTARAUNT:
        typeOffers = [];
        break;
      default:
        typeOffers = [];
    }

    if (typeOffers.length > 0) {
      const typeStructure = {
        type: type,
        offers: typeOffers.map((offer) => ({
          id: offer.id,
          title: offer.title,
          price: offer.price,
          isSelected: offer.isSelected
        })),
      };

      offers.push(typeStructure);
    }
  });

  return offers;
};

const generateOffersByTypes = () => {
  const offersByTypes = {};
  Object.values(POINT_TYPES).forEach((type) => {
    offersByTypes[type] = generateOffers(type);
  });

  return offersByTypes;
};

const getOffersByType = (type) => {
  const typeOffers = OFFERS.find((offerType) => offerType.type === type);

  if (typeOffers) {
    return typeOffers.offers;
  } else {
    return [];
  }
};

export { generateOffers, generateOffersByTypes, getOffersByType };
