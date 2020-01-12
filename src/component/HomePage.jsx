import React, { Component } from 'react';
import '../styles/HomePage-Styles.css';
import MovieContainer from './/MovieContainer';
import movieJson from '../data/data'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieArray: movieJson,
            searchInput: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount() {
    //     fetch('https://api.themoviedb.org/3/trending/all/week?api_key=41ee8f0fb93c516e6538a5ff5331f3eb')
    //         .then(jsonData => jsonData.json())
    //         .then(parsedData => this.setState({movieArray: parsedData.results}))
    // }

    handleChange(event) {
        this.setState({searchInput: event.target.value})
    }

    handleClick(event) {
        // fetch('https://api.themoviedb.org/3/search/movie?api_key=41ee8f0fb93c516e6538a5ff5331f3eb&language=en-US&query='+this.state.searchInput+'&page=1')
        //     .then(jsonResponse => jsonResponse.json())
        //     .then(parsedResponse => this.setState({movieArray: parsedResponse.results}))
    }

    render() {
        return (
            <>
                <header className="header">
                    <h1 className="heading">Movie Trouver</h1>
                    <div className="search-group">
                        <input type="text" placeholder="Type in movie name..." id="search" className="search-input search-element" onChange={this.handleChange} />
                        <button className="fa fa-search btn-search search-element" onClick={this.handleClick}></button>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-filter"><i className=" fas fa-filter"></i></button>
                        <button className="btn btn-sort"><i className="fas fa-sort-amount-up-alt"></i></button>
                        <button className="btn btn-fav"><i className="fas fa-heart"></i></button>
                    </div>
                </header>
                <main>
                    <MovieContainer movieArray={this.state.movieArray} />
                </main>
            </>
        );
    }
}

export default HomePage;
