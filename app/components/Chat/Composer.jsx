import React from 'react';
import ComposerActions from '../../actions/ComposerActions';
import ComposerStore from '../../stores/ComposerStore';

var divStyle = {
	position:"fixed",
	bottom:0,
	backgroundColor:"white",
	borderTop: "1px solid #e0e0e0"
};

export default class Composer extends React.Component {
	componentDidMount() {
		ComposerActions.activeComposer();
	}

  render() {
    return (
			<div id="message-container" className="col s12 m12 l12" style={divStyle}>
				<form >
						<div className="input-field col s12">
								<i className="material-icons prefix">message</i>
								<input id="icon_prefix" type="text" autoComplete="off" autoFocus/>
								<label id="composer-label" class="active" htmlFor="icon_prefix" >Envie uma mensagem</label>
						</div>
				</form>
			</div>
    );
  }

}
