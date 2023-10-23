import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Badge, Card, Row, Col } from 'react-bootstrap';

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
          <section>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Overview</Accordion.Header>
                  <Accordion.Body>{movie.overiew}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
              <Card.Text>{movie.release_date} - <Badge bg="warning">{movie.rating}</Badge></Card.Text>
            </Card.Body>
          </Card>
          </section>
        </Col>
      ))}
      </Row>
      </p>
    )
  }

}

export default Movies;