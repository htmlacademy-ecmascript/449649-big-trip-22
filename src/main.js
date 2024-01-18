import BriefView from './view/brief-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import { RenderPosition, render } from './framework/render.js';

const tripMain = document.querySelector('.trip-main');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const tripPresenter = new TripPresenter({
  tripContainer: tripEvents,
  pointsModel: pointsModel,
  destinationsModel: new DestinationsModel(),
  offersModel: new OffersModel(),
  filterModel
});
const filterPresenter = new FilterPresenter({
  filterContainer: tripFilters,
  filterModel,
  pointsModel
});

render(new BriefView, tripMain, RenderPosition.AFTERBEGIN);
filterPresenter.init();
tripPresenter.init();
