import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    return (
      <div id='Forms'>
        <form method="get">
          <h4>Number of players: <input type="text"></input></h4>
          <h4>Game Category: </h4>
          <h4>Game Mechanics: </h4>
          <h4>Estimated Game Length: <input type='text'></input></h4>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}
