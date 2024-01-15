import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';
import { FILTER_TYPES } from './const.js';

dayjs.extend(durationPlugin);

const filter = {
  [FILTER_TYPES.EVERYTHING]: (points) => points,
  [FILTER_TYPES.FUTURE]: (points) => points.filter((point) => dayjs(point.dateFrom).isAfter(dayjs())),
  [FILTER_TYPES.PAST]: (points) => points.filter((point) => dayjs(point.dateTo).isBefore(dayjs())),
  [FILTER_TYPES.PRESENT]: (points) => points.filter((point) => dayjs(point.dateFrom).isBefore(dayjs()) && dayjs(point.dateTo).isAfter(dayjs())),
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const formatDate = (date) => date ? dayjs(date).format('MMM DD') : '';
const formatTime = (date) => date ? dayjs(date).format('HH:mm') : '';
const getTimeDiff = (dateFrom, dateTo) => dayjs(dateTo).diff(dateFrom, 'minute');
const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);
const sortPointsByPrice = (eventA, eventB) => eventB.basePrice - eventA.basePrice;
const sortPointsByTime = (eventA, eventB) => {
  const durationA = dayjs(eventA.dateTo).diff(eventA.dateFrom);
  const durationB = dayjs(eventB.dateTo).diff(eventB.dateFrom);
  return durationB - durationA;
};

const sortPointsByDay = (pointA, pointB) => {
  const dateA = dayjs(pointA.dateFrom).valueOf();
  const dateB = dayjs(pointB.dateFrom).valueOf();

  return dateA - dateB;
};

export { formatDate, formatTime, getTimeDiff, isEscapeKey, updateItem, sortPointsByPrice, sortPointsByTime, sortPointsByDay, filter };
