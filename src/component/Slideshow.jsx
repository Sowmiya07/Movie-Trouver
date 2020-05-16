import React from 'react';
import '../styles/Slideshow-Styles.css';
import ReactComponent from '../data/poster.jpg';

const Slideshow = () => {
  return (
    <>
      <div className="slideshowContainer">
          <img src={ReactComponent} alt="movie poster" className="moviePoster" />
          <h3 className="movieName">Dating After College</h3>
          <button className="buyNow">Watch Trailer</button>
          <img src={ReactComponent} alt="movie poster" className="opaqueBackground" />
      </div>
    </>
  )
}

export default Slideshow;
