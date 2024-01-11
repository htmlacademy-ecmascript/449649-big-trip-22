import { nanoid } from 'nanoid';
import { availlableDestinations } from './mock/destination';

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
  TAXI: 'Taxi',
  BUS: 'Bus',
  TRAIN: 'Train',
  SHIP: 'Ship',
  TRANSPORT: 'Transport',
  DRIVE: 'Drive',
  FLIGHT: 'Flight',
  CHECKIN: 'Check-in',
  SIGHTSEEING: 'Sightseeing',
  RESTARAUNT: 'Restaurant'
};

const AVAILLABLE_DESTINATIONS = availlableDestinations();

const OFFERS_BY_TYPES = {
  TAXI: [
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
  ],
  BUS: [
    {
      id: nanoid(),
      title: 'Choose seats',
      price: 120,
      isSelected: true,
    }
  ],
  TRAIN: [
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
  ],
  SHIP: [
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
  ],
  TRANSPORT: [
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
  ],
  DRIVE: [],
  FLIGHT: [
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
  ],
  CHECKIN: [
    {
      id: nanoid(),
      title: 'Upgrade to a business class',
      price: 120,
      isSelected: true,
    }
  ],
  SIGHTSEEING: [],
  RESTAURANT: [],
};

export { FILTER_TYPES, SORT_TYPES, POINT_TYPES, AVAILLABLE_DESTINATIONS, OFFERS_BY_TYPES };
