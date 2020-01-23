import React, { Component } from 'react';
import './css/App.css';
import Movie from './Movie';

const movies = 
[
  {
    title : "maxtrix",
    poster : "https://cdn.vox-cdn.com/thumbor/lzOgDk9FJXkaA2PegCZ_Mcti6d8=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/64917704/matrix.0.jpg"

  },
  {
    title : "full metal jacket",
    poster : "http://mblogthumb1.phinf.naver.net/MjAxOTAxMDNfMSAg/MDAxNTQ2NTIyNzIxMDQy.Mg-Unq0TcP20nuJt4jwQIII0qaJoxf9blEmWZryiL_Ig.Iya4LSd-MU81saiCOXhBAAaF87TMoWCTfO-pz_WjyI4g.JPEG.winpil99/full.jpg?type=w800"

  },
  {
    title : "old boy",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/220px-Old_Boy.jpg"

  },
  {
    title : "star wars",
    poster : "https://images-na.ssl-images-amazon.com/images/I/710NixgbhyL._SY445_.jpg"

  }
]

class App extends Component {
  render(){
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
