/* core of aplication, entry point, high level view */

import AltContainer from 'alt/AltContainer';
import React from 'react';
import Navbar from './Navbar.jsx';
import Chat from './Chat.jsx';

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
