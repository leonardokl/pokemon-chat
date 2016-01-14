import React from 'react';

export default class Chat extends React.Component {
  render() {
    return (
			<div className="row">
		    <div className="col s12 m12 l12">
		      <ul id="messages" className="collection" style="margin-bottom:70px"></ul>
		    </div>

		      <div id="message-container" className="col s12 m12 l12" style="position:fixed ;bottom:0;background-color:white;border-top: 1px solid #e0e0e0">
		        <form >
		            <div className="input-field col s12">
		                <i className="material-icons prefix">message</i>
		                <input id="icon_prefix" type="text" autocomplete="off" autofocus/>
		                <label htmlFor="icon_prefix">Envie uma mensagem</label>
		            </div>
		        </form>
		      </div>

		  <div id="last-message"></div>
			</div>
    );
  }
}
