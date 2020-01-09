import React from 'react';
import MovieCard from './MovieCard';

import '../styles/MovieContainer-Styles.css';

const MovieContainer = (props) => { 
    return (
        <div className="movie-container">
            {
                props.movieArray.map(movie =>
                    <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    );
}

export default MovieContainer