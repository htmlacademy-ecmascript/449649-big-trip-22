export default class PointsModel {
  #points = null;

  constructor(points) {
    this.#points = points;
  }

  get points() {
    return this.#points;
  }

  getById = (pointId) => this.#points.find((point) => point.id === pointId);
}
