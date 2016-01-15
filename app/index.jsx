import React from 'react';
import 'array.prototype.findindex';
import App from './components/App.jsx';
import alt from './libs/alt';
import Jquery from "jquery";

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<App />, app);
}
