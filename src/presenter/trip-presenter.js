import {render} from '../render';
import PointView from '../view/point-view';
import PointListView from '../view/points-list-view.js';
import EditView from '../view/edit-view';
import SortView from '../view/sort-view';
import TripView from '../view/trip-view';

export default class TripPresenter {
  tripViewComponent = new TripView();
  pointListViewComponent = new PointListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(new SortView(), this.tripContainer);
    render(this.tripViewComponent, this.tripContainer);
    render(this.pointListViewComponent, this.tripContainer);
    render(new EditView(), this.tripContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripContainer);
    }
  }
}

