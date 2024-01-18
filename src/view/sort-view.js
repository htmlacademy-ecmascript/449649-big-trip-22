import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../const';

const sortValues = [SortType.DAY, SortType.EVENT, SortType.TIME, SortType.PRICE, SortType.OFFERS];

function createSortTemplate(currentSortType = SortType.DAY) {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${sortValues.map((value) => {
      const isDisabled = value === SortType.OFFERS || value === SortType.EVENT;
      return (`
        <div class="trip-sort__item  trip-sort__item--${value}">
                <input id="sort-${value}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
                value="sort-${value}" data-sort-type="${value}" ${isDisabled ? 'disabled' : ''}${currentSortType === value ? 'checked' : ''}>
                <label class="trip-sort__btn" for="sort-${value}">${value}</label>
        </div>`
      );
    }).join('')
    }
    </form>`
  );
}

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
    if (evt.target.tagName !== 'LABEL') {
      return;
    }
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
