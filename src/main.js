import TripPresenter from './presenter/trip-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './points-api-service.js';

const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';
const AUTHORIZATION = 'Basic eo8w790ij29812a';

const tripContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');
const headerContainer = document.querySelector('.trip-main');
const addNewEventButton = headerContainer.querySelector('.trip-main__event-add-btn');
addNewEventButton.addEventListener('click', newEventButtonClickHandler);

const pointsModel = new PointsModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });
const filterModel = new FilterModel();

const tripPresenter = new TripPresenter(tripContainer, addNewEventButton, pointsModel, filterModel, newEventFormCloseHandler);
const headerPresenter = new HeaderPresenter(headerContainer, pointsModel);
const filterPresenter = new FilterPresenter(filterContainer, filterModel, pointsModel);

function newEventFormCloseHandler() {
  addNewEventButton.disabled = false;
  tripPresenter.recoverAppMessage();
}

function newEventButtonClickHandler() {
  tripPresenter.createPoint();
  addNewEventButton.disabled = true;
}

pointsModel.init()
  .finally(() => {
    headerPresenter.init();
    filterPresenter.init();
  });
tripPresenter.init();
