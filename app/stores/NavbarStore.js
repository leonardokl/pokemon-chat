import alt from '../libs/alt';
import NavbarActions from '../actions/LaneActions';
import colorThief from '../libs/color-thief.min.js';
import Jquery from "jquery";

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
  }

  changeColor() {
			var myImage = document.getElementById('profile');
			myImage.addEventListener('load', function() {
				var colorThief = new ColorThief(),
				color = colorThief.getColor(myImage),
				colorRgb = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
				$('nav').css("background-color", colorRgb);
				//TODO: tira isso daqui
				$("#composer-label").addClass("active");
				return colorRgb;
			});
		}
}

export default alt.createStore(NavbarStore, 'NavbarStore');
