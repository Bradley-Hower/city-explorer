import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Badge, Card } from 'react-bootstrap';

class MovieTitle extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Overview</Accordion.Header>
              <Accordion.Body>{this.props.overiew}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <Card.Text>{this.props.release_date} - <Badge bg="warning">{this.props.rating}</Badge></Card.Text>
        </Card.Body>
      </Card>
      </section>
    )
  }

}

export default MovieTitle;