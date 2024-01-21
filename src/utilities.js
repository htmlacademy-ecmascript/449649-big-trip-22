import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';
import { FilterType, SortType } from './const.js';

dayjs.extend(durationPlugin);

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const formatDate = (date) => date ? dayjs(date).format('MMM DD') : '';
const formatTime = (date) => date ? dayjs(date).format('HH:mm') : '';
const getTimeDiff = (dateFrom, dateTo) => dayjs(dateTo).diff(dateFrom, 'minute');
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

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs(point.dateFrom).isAfter(dayjs())),
  [FilterType.PAST]: (points) => points.filter((point) => dayjs(point.dateTo).isBefore(dayjs())),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs(point.dateFrom).isBefore(dayjs()) && dayjs(point.dateTo).isAfter(dayjs())),
};

const sort = {
  [SortType.DAY]: (points) => points.sort(sortPointsByDay),
  [SortType.PRICE]: (points) => points.sort(sortPointsByPrice),
  [SortType.TIME]: (points) => points.sort(sortPointsByTime)
};

export { formatDate, formatTime, getTimeDiff, isEscapeKey, sortPointsByDay, sortPointsByPrice, sortPointsByTime, filter, sort };
