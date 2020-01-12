import React, { Component } from  'react';
import './css/Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="./logo192.png"></img>
        )
    }
}
export default Movie;