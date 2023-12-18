import { getRandomInteger } from './util.js';

const DESTINATIONS = ['Amsterdam', 'Chamonix', 'Geneva', 'Paris', 'Saint Petersburg', 'Vienna'];
const DESTINATION_DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];
const PICTURE_DESCRIPTION = [
  'Nestled between rolling hills and a bustling waterfront',
  'Known for its cutting-edge technology hubs, sleek design',
  'A city of contrasts, where tradition meets modernity',
  'With its colorful markets, lively street performers, and a rich tapestry of diverse neighborhoods',
  'Surrounded by lush greenery and framed by majestic mountains'
];

const generatePicture = () => ({
  src: `https://loremflickr.com/248/152?random=${getRandomInteger(1, 10)}`,
  description: PICTURE_DESCRIPTION[getRandomInteger(0, PICTURE_DESCRIPTION.length - 1)],
});

const generateDestination = () => {
  const picturesCount = getRandomInteger(0, 3);

  return {
    description: DESTINATION_DESCRIPTION[getRandomInteger(0, DESTINATION_DESCRIPTION.length - 1)],
    name: DESTINATIONS[getRandomInteger(0, DESTINATIONS.length - 1)],
    pictures: new Array(picturesCount).fill().map(generatePicture),
  };
};

export { generateDestination };
