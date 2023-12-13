import {generatePoint} from '../mock/point.js';
import {getRandomInteger} from '../util.js';

const POINTS_COUNT = getRandomInteger(1, 5);

export default class PointsModel {
  points = Array.from ({length: POINTS_COUNT}, generatePoint);

  getPoints() {
    return this.points;
  }
}
