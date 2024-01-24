import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../const';

const createSortItemTemplate = (sortType, checkedType) => (
  `<div class="trip-sort__item  trip-sort__item--${sortType}">
    <input
      id="sort-${sortType}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${sortType}"
      data-sort-type="${sortType}"
      ${sortType === checkedType ? 'checked' : ''}
      ${sortType === SortType.EVENT || sortType === SortType.OFFERS ? 'disabled' : ''}>
    <label class="trip-sort__btn" for="sort-${sortType}">${sortType === SortType.OFFERS ? 'Offers' : sortType}</label>
  </div>`
);

const createSortTemplate = (checkedType) => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${Object.values(SortType).map((item) => createSortItemTemplate(item, checkedType)).join('')}
  </form>`
);

export default class SortView extends AbstractView {
  #currentSortType = null;
  #handleSortTypeChange = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#currentSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    this.#handleSortTypeChange(evt);
  };
}
