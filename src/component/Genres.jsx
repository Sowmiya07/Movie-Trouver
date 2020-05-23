import React from 'react';
import '../styles/Genre-Style.css';
import Award from '../data/award.jpg';
import Comedy from '../data/comedy.jpg';
import Bollywood from '../data/bollywood.jpg';
import Cartoon from '../data/cartoon.jpg';

const Genres = ({heading}) => {
    return(
        <div className="genreContainer">
            <div className="genericInfo">
                <h2>{heading}</h2>
                <a href="">View all</a>
            </div>
            <div className="genreList">
                <div className="genre">
                    <img src={Award} className="bgImg" />
                    <span>Award Winning</span>
                </div>
                <div className="genre">
                    <img src={Comedy} className="bgImg" />
                    <span>Stand Up for Comedy</span>
                </div>
                <div className="genre">
                    <img src={Bollywood} className="bgImg" />
                    <span>Bollywood</span>
                </div>
                <div className="genre">
                    <img src={Cartoon} className="bgImg" />
                    <span>Cartoons</span>
                </div>
                <div className="genre">
                    <img src={Comedy} className="bgImg" />
                    <span>Genre 4</span>
                </div>
                <div className="genre">
                    <img src={Award} className="bgImg" />   
                    <span>Genre 5</span>
                </div>
            </div>
        </div>
    )
}

export default Genres;