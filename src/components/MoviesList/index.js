import React, { ReactDOM, Component } from 'react';
import MovieItem from '../MovieItem/'
import MovieAddCard from '../MovieAddCard/'
import { Button, FormControl } from 'react-bootstrap';

import './style.css';

class MoviesList extends Component {
  constructor(props){
    super(props)
    this.state = {
      minRating: 0,
      movies: this.props.movies
    }
  }

  changeMinRating(){
    this.setState({
      minRating: this.minRatingInput.value
    })
  }

  addingItem(item){
    console.log(this.state)
    var movies = this.state.movies
    movies.push(item)
    this.setState({
      movies: movies
    })
  }

  render() {
    return (
      <div className="movies-list-holder">
        <div className="movies-list-filter">
          <label>Min Rating: </label>
          <FormControl
            inputRef={input => this.minRatingInput = input}
            className="min-rating-input"
            type="number"
            min="0"
            max="5"
            defaultValue={this.state.minRating}/>
          <Button bsStyle="success" onClick={() => this.changeMinRating()}>Filter</Button>
        </div>
        <ul className="movies-list">
          {
            this.state.movies.map( (m) => {
              if (m.rating > this.state.minRating) {
                return <MovieItem movie={m} />
              }
            })
          }
          <MovieAddCard movies={ this.state.movies } onAddItem={ (e) => this.addingItem(e) }/>
        </ul>
      </div>
    );
  }
}

export default MoviesList;
