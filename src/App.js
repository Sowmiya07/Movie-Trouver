import React from 'react';
import './App.css';
import MOVIE_DATA from './data/data';

import Header from './component/Header';
import Slideshow from './component/Slideshow';
import Collections from './component/Collections';
import Genres from './component/Genres';

const App = () => {
  return (
    <>
      <div className="vibgyor"></div>
      <Header />
      <Slideshow />
      <Collections heading="New Movies" movieList={MOVIE_DATA} />
      <Genres heading="Genres" />
      <Collections heading="Best of Action Sports" movieList={MOVIE_DATA} />
      <Collections heading="Best of thriller" movieList={MOVIE_DATA} />
    </>
  )
}

export default App;
