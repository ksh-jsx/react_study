import React, { Component } from 'react';
import './css/App.css';
import Movie from './Movie';
import Loading from './Loading';



class App extends Component {

  // 랜더 : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = { 
  }

  componentDidMount(){
    setTimeout(() =>
    {
      this.setState({
        movies :
        [
          {
            title : "maxtrix",
            poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHT5bTVPUipdgg4nvzjGz4Iph9X1F0xND4C4oSlLbefPFUlyoRgQ&s"

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
      })
      window.addEventListener('scroll',this._infiniteScroll, true)
    }, 1000)
  }

  _loading =() => {
    return <Loading/>
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  _infiniteScroll = () => {
    
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop); 
    const clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight === scrollHeight){
      this.setState({
        
        movies :
        [
          ...this.state.movies,
          {
            title : "aa",
            poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHT5bTVPUipdgg4nvzjGz4Iph9X1F0xND4C4oSlLbefPFUlyoRgQ&s"

          },
          {
            title : "full metal jacket",
            poster : "http://mblogthumb1.phinf.naver.net/MjAxOTAxMDNfMSAg/MDAxNTQ2NTIyNzIxMDQy.Mg-Unq0TcP20nuJt4jwQIII0qaJoxf9blEmWZryiL_Ig.Iya4LSd-MU81saiCOXhBAAaF87TMoWCTfO-pz_WjyI4g.JPEG.winpil99/full.jpg?type=w800"

          }
        ]
      })
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : this._loading()}
      </div>
    );
  }
}

export default App;
