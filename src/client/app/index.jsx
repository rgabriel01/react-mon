import React from 'react';
import {render} from 'react-dom';
import YetAnotherComponent from './yet_another_component.jsx';


class Main extends React.Component {
  render () {
    return (
      <div>
        <p>yo react!</p>
        <YetAnotherComponent name='Mon' />
      </div>
    );
  }
}

render(<Main/>, document.getElementById('app'));

window.App = {};
window.App.randomGuy = "Mon Gabriel";