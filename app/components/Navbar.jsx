import React from 'react';

export default class Navbar extends React.Component {
  render() {

    return (
			<header className="navbar-fixed">
				<nav>
					<ul id="slide-out" className="side-nav fixed" >
						<li id="userName"></li>
						<li id="userImage"></li>
						<li className="no-padding">
							<ul className="collapsible collapsible-accordion">
								<li >
									<a className="collapsible-header"><i className="tiny material-icons">input</i>#Stadium</a>
								</li>
							</ul>
						</li>
						<li className="no-padding">
							<ul className="collapsible collapsible-accordion">
								<li>
									<a className="collapsible-header" ><i className="tiny material-icons">supervisor_account</i>Users (<span id="nUsers">0</span>)</a>
									<div className="collapsible-body">
										<ul id="roomUsers">
										</ul>
									</div>
								</li>
							</ul>
						</li>
					</ul>

					<a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>

					<div className="nav-wrapper">
						<a id="roomName" href="#" className="brand-logo center">#Stadium</a>
					</div>
				</nav>
			</header>
    );
  }

}
