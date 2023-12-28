import BriefView from './view/brief-view.js';
import FilterView from './view/filters-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import { RenderPosition, render } from './framework/render.js';
import { generateFilter } from './mock/filter.js';

const tripMain = document.querySelector('.trip-main');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({ tripContainer: tripEvents, pointsModel: pointsModel });
const filters = generateFilter(pointsModel.points);

render(new BriefView, tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView({filters}), tripFilters);
tripPresenter.init();
