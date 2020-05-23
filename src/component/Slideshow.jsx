import React from 'react';
import '../styles/Slideshow-Styles.css';

const Slideshow = ({title, url, story}) => {
  return (
    <div className="desktopBg">
      <div className="slideshowContainer">
            <img src={`https://image.tmdb.org/t/p/original/${url}`} alt="movie poster" className="moviePoster" />
            <div className="movieInfo">
              <h3 className="movieName">{title}</h3>
              <span className="movieLine">{story}</span>
              <button className="buyNow">Watch Trailer</button>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${url}`} alt="movie poster" className="opaqueBackground" />
        </div>
    </div>
  )
}

export default Slideshow;
