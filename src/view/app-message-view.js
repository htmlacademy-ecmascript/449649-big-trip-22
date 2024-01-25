import AbstractView from '../framework/view/abstract-view.js';
import { AppMessage } from '../const.js';

const createAppMessageTemplate = (type) => (`<p class="trip-events__msg">${AppMessage[type]}</p>`);

export default class AppMessageView extends AbstractView {
  #messageType = null;

  constructor({messageType}) {
    super();

    this.#messageType = messageType;
  }

  get template() {
    return createAppMessageTemplate(this.#messageType);
  }
}
