import alt from '../libs/alt';
import ComposerActions from '../actions/ComposerActions';
import colorThief from '../libs/color-thief.min.js';
import Jquery from "jquery";

class ComposerStore {
  constructor() {
    this.bindActions(ComposerActions);
  }

  activeComposer() {
		console.log("COMPOSER_STORE");
		$("#composer-label").addClass("active");
  }
}

export default alt.createStore(ComposerStore, 'ComposerStore');
