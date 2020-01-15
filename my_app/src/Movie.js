import React, { Component } from  'react';
import './css/Movie.css';

class Movie extends Component{
    render(){
        return(
            <div className="movie_info">
                <MoviePoster poster ={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster}></img>
        )
    }
}
export default Movie;