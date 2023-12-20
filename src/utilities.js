import dayjs from 'dayjs';
const isEscapeKey = (evt) => evt.key === 'Escape';
const formatDate = (date) => date ? dayjs(date).format('MMM DD') : '';
const formatTime = (date) => date ? dayjs(date).format('HH:mm') : '';
const getTimeDiff = (dateFrom, dateTo) => dayjs(dateTo).diff(dateFrom, 'minute');

export { formatDate, formatTime, getTimeDiff, isEscapeKey };
