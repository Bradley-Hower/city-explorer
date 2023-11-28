import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Badge, Card } from 'react-bootstrap';

class RestaurantsName extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${this.props.image_url}`} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Overview</Accordion.Header>
              <Accordion.Body>{this.props.url}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <Card.Text>{this.props.price} - <Badge bg="warning">{this.props.rating}</Badge></Card.Text>
        </Card.Body>
      </Card>
      </section>
    )
  }

}

export default RestaurantsName;