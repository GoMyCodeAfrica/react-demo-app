import React, { ReactDOM, Component } from 'react';
import { Button, FormControl, Panel, Thumbnail, Glyphicon} from 'react-bootstrap';

import './style.css';

class MovieItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      movie: this.props.movie,
      editing: false
    }
  }

  changeRating(){
    var obj = this.state.movie
    obj.rating = this.ratingInput.value
    console.log(this.ratingInput.value)
    this.setState({
      movie: this.state.movie
    })
  }

  startsFor(x){
    console.log(x)
    var stars = []
    x = parseInt(x)
    for (var i = 0; i < x; i++) {
      stars.push(<Glyphicon glyph="star" />)
    }
    return stars
  }

  switchEditing(){
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    return (
      <Panel className="movie-item">
        <Thumbnail href="#" alt="171x180" src={this.state.movie.img} />
        <header>{this.state.movie.name}</header>
        <p>
          {
            this.startsFor(this.state.movie.rating)
          }
        </p>
        <hr />
        {
          !this.state.editing &&
          <Button bsStyle="link" onClick={ () => this.switchEditing() }>Edit</Button>
        }
        {
          this.state.editing &&
          <div className="movie-item-rating">
            <FormControl
              inputRef={input => this.ratingInput = input}
              className="rating-input"
              type="number"
              min="0"
              max="5"
              defaultValue={this.state.movie.rating}/>
            <Button bsStyle="success" onClick={() => this.changeRating()}>Change</Button>
            <button type="button" className="close" aria-label="Close" onClick={() => this.switchEditing()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }
      </Panel>
    )
  }
}

export default MovieItem
