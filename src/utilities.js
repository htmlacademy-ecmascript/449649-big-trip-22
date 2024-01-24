import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';
import minMax from 'dayjs/plugin/minMax';
import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_HOUR, DateFormat, FilterType, SortType } from './const.js';

dayjs.extend(durationPlugin);
dayjs.extend(minMax);

const getDifferenceInTime = (start, end) => {
  const difference = dayjs(end).diff(dayjs(start));

  switch (true) {
    case difference < MILLISECONDS_IN_HOUR:
      return dayjs.duration(difference).format(DateFormat.MINUTES_WITH_POSTFIX);

    case difference >= MILLISECONDS_IN_HOUR && difference < MILLISECONDS_IN_DAY:
      return dayjs.duration(difference).format(DateFormat.HOUR_MINUTES_WITH_POSTFIX);

    case difference >= MILLISECONDS_IN_DAY:
      return Math.floor(dayjs.duration(difference).asDays()) < 10
        ? `0${Math.floor(dayjs.duration(difference).asDays())}D ${dayjs.duration(difference).format(DateFormat.HOUR_MINUTES_WITH_POSTFIX)}`
        : `${Math.floor(dayjs.duration(difference).asDays())}D ${dayjs.duration(difference).format(DateFormat.HOUR_MINUTES_WITH_POSTFIX)}`;
  }
};

const humanizeDate = (date, format) => date ? dayjs(date).format(format) : '';
const getMinData = (items) => humanizeDate(dayjs.min(items.map((item) => dayjs(item.dateFrom))), DateFormat.DAY_MONTH);
const getMaxData = (items) => humanizeDate(dayjs.max(items.map((item) => dayjs(item.dateTo))), DateFormat.DAY_MONTH);
const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
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

const getElementsById = (elements, itemsId) => {
  if (Array.isArray(itemsId)) {
    return elements.filter((element) => itemsId.find((id) => element.id === id));
  }

  return elements.find((element) => element.id === itemsId);
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

export {
  humanizeDate,
  getDifferenceInTime,
  getMinData,
  getMaxData,
  isEscapeKey,
  sortPointsByDay,
  sortPointsByPrice,
  sortPointsByTime,
  getElementsById,
  filter,
  sort
};
