import React from 'react';
import './App.css';
import MOVIE_DATA from './data/data';

import Header from './component/Header';
import Slideshow from './component/Slideshow';
import Collections from './component/Collections';
import Genres from './component/Genres';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      if(this.state.currentIndex < MOVIE_DATA.length - 1) {
        this.setState((prevState) => ({
          currentIndex: prevState.currentIndex + 1
        }))
      } else {
        this.setState({currentIndex: 0})
      }
    }, 5000);
  }

  render() {
      return (
      <>
        <div className="vibgyor"></div>
        <Header />
        <Slideshow title={MOVIE_DATA[this.state.currentIndex].title} 
          url={MOVIE_DATA[this.state.currentIndex].poster_path} />
        <Collections heading="New Movies" movieList={MOVIE_DATA}/>
        <Genres heading="Genres" />
        <Collections heading="Best of Action Sports" movieList={MOVIE_DATA} />
        <Collections heading="Best of thriller" movieList={MOVIE_DATA} />
      </>
    )
  }
}

export default App;
