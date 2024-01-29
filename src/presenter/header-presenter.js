import { RenderPosition, render, remove } from '../framework/render';
import { sort } from '../utilities';
import { SortType } from '../const.js';
import HeaderView from '../view/header-view';

export default class HeaderPresenter {
  #headerContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #headerComponent = null;

  constructor(headerContainer, pointsModel) {
    this.#headerContainer = headerContainer;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handlePointsChange);
  }

  init() {
    this.#renderHeaderList();
  }

  get points() {
    return this.#pointsModel.points;
  }

  get destinations() {
    return this.#pointsModel.destinations;
  }

  get offers() {
    return this.#pointsModel.offers;
  }

  #renderHeaderList() {
    if (this.#headerComponent) {
      remove(this.#headerComponent);
    }
    if (this.points.length === 0) {
      return;
    }
    this.#headerComponent = new HeaderView({
      points: sort[SortType.DAY](this.points),
      destinations: this.destinations,
      offers: this.offers
    });
    render(this.#headerComponent, this.#headerContainer, RenderPosition.AFTERBEGIN);
  }

  #handlePointsChange = () => {
    this.#renderHeaderList();
  };
}
