import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';
import { FilterType } from './const.js';

dayjs.extend(durationPlugin);

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs(point.dateFrom).isAfter(dayjs())),
  [FilterType.PAST]: (points) => points.filter((point) => dayjs(point.dateTo).isBefore(dayjs())),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs(point.dateFrom).isBefore(dayjs()) && dayjs(point.dateTo).isAfter(dayjs())),
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const formatDate = (date) => date ? dayjs(date).format('MMM DD') : '';
const formatTime = (date) => date ? dayjs(date).format('HH:mm') : '';
const getTimeDiff = (dateFrom, dateTo) => dayjs(dateTo).diff(dateFrom, 'minute');
const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);
const sortPrice = (eventA, eventB) => eventB.basePrice - eventA.basePrice;
const sortTime = (eventA, eventB) => {
  const durationA = dayjs(eventA.dateTo).diff(eventA.dateFrom);
  const durationB = dayjs(eventB.dateTo).diff(eventB.dateFrom);
  return durationB - durationA;
};

export { formatDate, formatTime, getTimeDiff, isEscapeKey, updateItem, sortPrice, sortTime, filter };
