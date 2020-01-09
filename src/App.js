import React, {Component} from 'react';
import './App.css';

import movieJson from './data/data.js';
import MovieContainer from './component/MovieContainer';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movieArray: movieJson
    }
  }

  render() {
    return (
      <>
        <header className="header">
          <h1 className="heading">Movie Trouver</h1>
        </header>
        <main>
          <MovieContainer movieArray={this.state.movieArray} />
        </main>
      </>
    );
  }
}

export default App;
