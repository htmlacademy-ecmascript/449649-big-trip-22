import TripPresenter from './presenter/trip-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';

const tripContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');
const headerContainer = document.querySelector('.trip-main');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

const tripPresenter = new TripPresenter(tripContainer, headerContainer, pointsModel, destinationsModel, offersModel, filterModel);
const headerPresenter = new HeaderPresenter(headerContainer, pointsModel, destinationsModel);
const filterPresenter = new FilterPresenter(filterContainer, filterModel, pointsModel);

tripPresenter.init();
headerPresenter.init();
filterPresenter.init();
