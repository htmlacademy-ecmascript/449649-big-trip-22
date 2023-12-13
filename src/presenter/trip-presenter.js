import {render} from '../render';
import PointView from '../view/point-view';
import PointListView from '../view/points-list-view.js';
import EditView from '../view/edit-view';
import SortView from '../view/sort-view';
import TripView from '../view/trip-view';

export default class TripPresenter {
  tripViewComponent = new TripView();
  pointListViewComponent = new PointListView();

  constructor({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.pointsModel = [...this.pointsModel.getPoints()];

    render(new SortView(), this.tripContainer);
    render(this.tripViewComponent, this.tripContainer);
    render(this.pointListViewComponent, this.tripContainer);
    render(new EditView(), this.pointListViewComponent.getElement());

    for (let i = 0; i < this.pointsModel.length; i++) {
      render(new PointView({point: this.pointsModel[i]}), this.pointListViewComponent.getElement());
    }
  }
}

