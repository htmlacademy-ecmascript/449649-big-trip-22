import { RenderPosition, render, remove } from '../framework/render';
import { sort } from '../utilities';
import { SortType } from '../const.js';
import HeaderView from '../view/header-view';

export default class HeaderPresenter {
  #headerContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #headerComponent = null;

  constructor(headerContainer, pointsModel, destinationsModel) {
    this.#headerContainer = headerContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;

    this.#pointsModel.addObserver(this.#handlePointsChange);
  }

  get points() {
    return this.#pointsModel.points;
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  init() {
    this.#renderHeaderList();
  }

  #handlePointsChange = () => {
    this.#renderHeaderList();
  };

  #renderHeaderList() {
    if (this.#headerComponent) {
      remove(this.#headerComponent);
    }
    if (this.points.length === 0) {
      return;
    }
    this.#headerComponent = new HeaderView({
      points: sort[SortType.DAY](this.points),
      destinations: this.destinations
    });
    render(this.#headerComponent, this.#headerContainer, RenderPosition.AFTERBEGIN);
  }
}
