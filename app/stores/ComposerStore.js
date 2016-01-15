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
		setInterval(function(){
		 getfocus();
		});

		function getfocus()
		{
		  var focusbox;
		  focusbox = document.getElementById("icon_prefix");
		  {
		    setTimeout(function() {
		      focusbox.focus();
		    }, 1);
		  }

		}
  }
}

export default alt.createStore(ComposerStore, 'ComposerStore');
