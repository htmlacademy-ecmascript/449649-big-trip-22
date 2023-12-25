import dayjs from 'dayjs';
import { FilterType } from './const.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs(point.dateFrom).isAfter(dayjs())),
  [FilterType.PAST]: (points) => points.filter((point) => dayjs(point.dateTo).isBefore(dayjs())),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs.isToday(point.dateFrom))
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const formatDate = (date) => date ? dayjs(date).format('MMM DD') : '';
const formatTime = (date) => date ? dayjs(date).format('HH:mm') : '';
const getTimeDiff = (dateFrom, dateTo) => dayjs(dateTo).diff(dateFrom, 'minute');
const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export { formatDate, formatTime, getTimeDiff, isEscapeKey, updateItem, filter };
