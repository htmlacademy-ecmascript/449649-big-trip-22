import AbstractView from '../framework/view/abstract-view.js';

const createFilterTemplate = (filter, isChecked) => {
  const { type, count } = filter;

  return (`
    <div class="trip-filters__filter">
      <input
        id="filter-${type}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="everything"
        ${isChecked ? 'checked' : ''}
        ${count === 0 ? 'disabled' : ''}
      >
      <label class="trip-filters__filter-label" for="filter-${type}">
        ${type}
      </label>
    </div>`);
};

const createFiltersTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFilterTemplate(filter, index === 0))
    .join('');

  return (`
      <form class="trip-filters" action="#" method="get">
        ${filterItemsTemplate}
      </form>`);
};

export default class FiltersView extends AbstractView {
  #filters = null;

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
