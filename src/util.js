import dayjs from 'dayjs';

const getRandomInteger = (min, max) => Math.round((max - min) * Math.random() + min);
function formatDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format('D MMMM') : '';
}

export {getRandomInteger, formatDueDate};

