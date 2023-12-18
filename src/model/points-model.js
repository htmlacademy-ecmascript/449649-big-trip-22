import { generatePoint } from '../mock/point.js';
import { getRandomInteger } from '../mock/util.js';

const POINTS_COUNT = getRandomInteger(0, 5);

export default class PointsModel {
  points = Array.from({ length: POINTS_COUNT }, generatePoint);

  getPoints() {
    return this.points;
  }
}
