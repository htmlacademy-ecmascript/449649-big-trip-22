import BriefView from './view/brief-view.js';
import FilterView from './view/filters-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import { RenderPosition, render } from './framework/render.js';
import { generateFilter } from './mock/filter.js';
import { generatePoint } from './mock/point.js';
import { AVAILLABLE_DESTINATIONS, OFFERS } from './const.js';
import { getRandomInteger } from './mock/util.js';
const POINTS_COUNT = getRandomInteger(0, 5);

const tripMain = document.querySelector('.trip-main');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel(Array.from({ length: POINTS_COUNT }, generatePoint));
const tripPresenter = new TripPresenter({
  tripContainer: tripEvents,
  pointsModel: pointsModel,
  destinationsModel: new DestinationsModel(AVAILLABLE_DESTINATIONS),
  offersModel: new OffersModel(OFFERS),
});
const filters = generateFilter(pointsModel.points);

render(new BriefView, tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView({filters}), tripFilters);
tripPresenter.init();
