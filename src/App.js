import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoviesList from './components/MoviesList/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MoviesApp</h1>
        </header>
        <p className="App-intro">
          <MoviesList movies={[
            {
              "name": "Justice League (2017)",
              "rating": "5",
              "img": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDgwNjMwNjM1OV5BMl5BanBnXkFtZTgwNjA2Njk5MzI@._V1_UX140_CR0,0,140,209_AL_.jpg"
            },{
              "name": "Justice League (2017)",
              "rating": "2",
              "img": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDgwNjMwNjM1OV5BMl5BanBnXkFtZTgwNjA2Njk5MzI@._V1_UX140_CR0,0,140,209_AL_.jpg"
            },{
              "name": "Justice League (2017)",
              "rating": "4",
              "img": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDgwNjMwNjM1OV5BMl5BanBnXkFtZTgwNjA2Njk5MzI@._V1_UX140_CR0,0,140,209_AL_.jpg"
            },
          ]}/>
        </p>
      </div>
    );
  }
}

export default App;
