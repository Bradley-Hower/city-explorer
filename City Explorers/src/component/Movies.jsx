import React from 'react';
import MovieTitle from './MovieTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

class Movies extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <p>
      <br />
      <h2><b>Movies</b></h2>
        <br /><br />
      <Row xs={1} md={4} className="g-4">
      {this.props.movielist.map((movie, idx) => (
        <Col key={idx}>
          <MovieTitle poster={movie.poster} title={movie.title} overiew={movie.overview} release_date={movie.release_date} rating={movie.rating}/>
        </Col>
      ))}
      </Row>
      </p>
    )
  }

}

export default Movies;