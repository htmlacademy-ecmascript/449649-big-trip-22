import { PointType } from '../const.js';

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
            id: '1',
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: '2',
            title: 'Choose the radio station',
            price: 60
          }
        ];
        break;
      case PointType.BUS:
        typeOffers = [
          {
            id: '3',
            title: 'Choose seats',
            price: 120
          }
        ];
        break;
      case PointType.TRAIN:
        typeOffers = [
          {
            id: '4',
            title: 'Add meal',
            price: 120
          },
          {
            id: '5',
            title: 'Switch to comfort',
            price: 120
          },
          {
            id: '6',
            title: 'Add luggage',
            price: 60
          }
        ];
        break;
      case PointType.SHIP:
        typeOffers = [
          {
            id: '7',
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: '8',
            title: 'Switch to comfort',
            price: 60
          }
        ];
        break;
      case PointType.DRIVE:
        typeOffers = [
          {
            id: '9',
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: '10',
            title: 'Choose the radio station',
            price: 60
          }
        ];
        break;
      case PointType.FLIGHT:
        typeOffers = [
          {
            id: '11',
            title: 'Upgrade to a business class',
            price: 120
          },
          {
            id: '12',
            title: 'Switch to comfort',
            price: 120
          },
          {
            id: '13',
            title: 'Choose seats',
            price: 120
          },
          {
            id: '14',
            title: 'Add luggage',
            price: 120
          },
          {
            id: '15',
            title: 'Travel by train',
            price: 60
          }
        ];
        break;
      case PointType.CHECKIN:
        typeOffers = [
          {
            id: '16',
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
          price: offer.price
        })),
      };

      offers.push(typeStructure);
    }
  });

  return offers;
};

const getOffersByType = (type) => {
  const allOffers = generateOffers();
  const filteredOffers = allOffers.filter((offer) => offer.type === type.toLowerCase());
  return filteredOffers;
};

const getOffersIds = (type) => {
  const typeOffers = getOffersByType(type);
  return typeOffers.flatMap((offer) => offer.offers.map((o) => o.id));
};

export { generateOffers, getOffersIds };
