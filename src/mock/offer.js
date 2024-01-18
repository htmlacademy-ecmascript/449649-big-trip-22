import { PointType, OFFERS } from '../const.js';
import { nanoid } from 'nanoid';

const generateOffers = () => {
  const offers = [];

  const pointTypesOrder = [
    PointType.TAXI,
    PointType.BUS,
    PointType.TRAIN,
    PointType.SHIP,
    PointType.DRIVE,
    PointType.FLIGHT,
    PointType.CHECKIN,
    PointType.SIGHTSEEING,
    PointType.RESTARAUNT
  ];

  pointTypesOrder.forEach((type) => {
    let typeOffers = [];

    switch (type) {
      case PointType.TAXI:
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
      case PointType.BUS:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Choose seats',
            price: 120
          }
        ];
        break;
      case PointType.TRAIN:
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
      case PointType.SHIP:
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
      case PointType.DRIVE:
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
      case PointType.FLIGHT:
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
      case PointType.CHECKIN:
        typeOffers = [
          {
            id: nanoid(),
            title: 'Upgrade to a business class',
            price: 120
          }
        ];
        break;
      case PointType.SIGHTSEEING:
        typeOffers = [];
        break;
      case PointType.RESTARAUNT:
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
  Object.values(PointType).forEach((type) => {
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
