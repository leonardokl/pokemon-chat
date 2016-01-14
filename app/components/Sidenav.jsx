import React from 'react';

export default class Sidenav extends React.Component {
  render() {

    return (
					<ul id="slide-out" className="side-nav fixed" >
						<li id="userName"></li>
						<li id="userImage"></li>
						<li className="no-padding">
							<ul className="collapsible collapsible-accordion">
								<li >
									<a onCLick='getRoomMsg()' className="collapsible-header"><i className="tiny material-icons">input</i>#Stadium</a>
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
    );
  }

}
