const getRandomInteger = (min, max) => Math.round((max - min) * Math.random() + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, getRandomArrayElement };

