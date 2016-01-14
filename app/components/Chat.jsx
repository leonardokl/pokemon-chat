import React from 'react';
import Messages from './Messages';
import Composer from './Composer';

export default class Chat extends React.Component {
  render() {

    return (
			<main>
				<div className="row">
			    <Messages />
					<Composer />
				</div>
			</main>
    );
  }

}
