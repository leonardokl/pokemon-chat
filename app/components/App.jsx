/* core of aplication, entry point, high level view */

import AltContainer from 'alt/AltContainer';
import React from 'react';
import Navbar from './Navbar';
import Chat from './Chat';

export default class App extends React.Component {
  render() {
    return (
      <div>
				<Navbar />
				<Chat />
      </div>
    );
  }
}
