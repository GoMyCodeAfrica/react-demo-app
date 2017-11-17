import React, { ReactDOM, Component } from 'react';
import { Button, FormControl, Panel, Thumbnail, Glyphicon} from 'react-bootstrap';

import './style.css';

class MovieAddCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: this.props.movies,
      editing: false
    }
  }

  addMovie(){
    var movie = {
      "name": "movie",
      "rating": "3",
      "img": ""
    }
    this.props.onAddItem(movie)
  }

  render() {
    return (
      <Panel className="movie-item panel-add">
        <div className="btn-add" onClick={ () => this.addMovie() }>
          +
        </div>
      </Panel>
    )
  }
}

export default MovieAddCard
