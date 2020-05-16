import React from 'react';
import ReactComponent from '../data/poster.jpg';
import '../styles/Collections-Styles.css';

const Collections = ({heading, movieList}) => {
    return (
        <div className="collectionsContainer">
            <div className="genericCollectionsInfo">
                <h2>{heading}</h2>
                <a href="">View all</a>
            </div>
            <div className="collections">
            {
                movieList.map( movie => (
                    <div className="collectionItem">
                        <img src={ReactComponent} />
                        <span>{movie.title}</span>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Collections;