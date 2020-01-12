import React from 'react';
import '../styles/MovieCard-Styles.css';

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <img className="movie-poster" src="https://image.tmdb.org/t/p/original//2NljKDHFCjBATferrMmvWmrWMtj.jpg" alt="" />
            <span className="movie-title">{props.movie.title}</span>
        </div>
    )
}

MovieCard.defaultProps = {
    title: '',
    release_date: ''  
}

export default MovieCard