import React from 'react';
import '../styles/Slideshow-Styles.css';

const Slideshow = ({title, url}) => {
    console.log(url)
  return (
    <>
      <div className="slideshowContainer">
            <img src={`https://image.tmdb.org/t/p/original/${url}`} alt="movie poster" className="moviePoster" />
            <h3 className="movieName">{title}</h3>
            <button className="buyNow">Watch Trailer</button>
            <img src={`https://image.tmdb.org/t/p/original/${url}`} alt="movie poster" className="opaqueBackground" />
        </div>
    </>
  )
}

export default Slideshow;
