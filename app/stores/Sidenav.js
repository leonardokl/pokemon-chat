import alt from '../libs/alt';
import LaneActions from '../actions/SidenavActions';

class SidenavStore {
  constructor() {
    this.bindActions(SidenavActions);

    this.user = "";
  }

  selectRoom() {
		
	}
}

export default alt.createStore(SidenavStore, 'SidenavStore');
