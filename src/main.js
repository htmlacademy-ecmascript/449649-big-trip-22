import TripPresenter from './presenter/trip-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import TasksApiService from './points-api-service.js';

const END_POINT = 'https://21.objects.pages.academy/big-trip';
const AUTHORIZATION = 'Basic eo8w790ij29812a';

const tripContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');
const headerContainer = document.querySelector('.trip-main');

const pointsModel = new PointsModel({
  pointsApiService: new TasksApiService(END_POINT, AUTHORIZATION),
});
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

const tripPresenter = new TripPresenter(tripContainer, headerContainer, pointsModel, destinationsModel, offersModel, filterModel);
const headerPresenter = new HeaderPresenter(headerContainer, pointsModel, destinationsModel);
const filterPresenter = new FilterPresenter(filterContainer, filterModel, pointsModel);

pointsModel.init();
tripPresenter.init();
headerPresenter.init();
filterPresenter.init();
