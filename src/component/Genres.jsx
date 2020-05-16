import React from 'react';
import '../styles/Genre-Style.css';

const Genres = ({heading}) => {
    return(
        <div className="genreContainer">
            <div className="genericInfo">
                <h2>{heading}</h2>
                <a href="">View all</a>
            </div>
            <div className="genreList">
                <div className="genre">
                    <span>Award Winning</span>
                </div>
                <div className="genre">
                    <span>Stand Up for Comedy</span>
                </div>
                <div className="genre">
                    <span>Bollywood</span>
                </div>
                <div className="genre">
                    <span>Cartoons</span>
                </div>
                <div className="genre">
                    <span>Genre 4</span>
                </div>
                <div className="genre">
                    <span>Genre 5</span>
                </div>
            </div>
        </div>
    )
}

export default Genres;