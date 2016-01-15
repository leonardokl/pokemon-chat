import React from 'react';
import Sidenav from './Sidenav';

export default class Navbar extends React.Component {
  render() {

    return (
			<header className="navbar-fixed">
				<nav>
					<Sidenav />
					<a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
						<div className="nav-wrapper">
							<a id="roomName" href="#" className="brand-logo center">#Stadium</a>
						</div>
				</nav>
			</header>
    );
  }

}
