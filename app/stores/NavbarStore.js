import alt from '../libs/alt';
import NavbarActions from '../actions/LaneActions';
import colorThief from '../libs/color-thief.min.js';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
  }

  changeColor() {

  }
}

export default alt.createStore(NavbarStore, 'NavbarStore');
