import React from 'react';

var divStyle = {
	marginBottom:"70px"
};

export default class Messages extends React.Component {
  render() {
    return (
			<div className="col s12 m12 l12">
				<ul id="messages" className="collection" style={divStyle}></ul>
				<div id="last-message"></div>
			</div>
    );
  }
}
