import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class WeatherDay extends React.Component{
  constructor(props){;
  super(props);
  }

  render(){
    return(
      <>
          <section>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <Card.Title>{this.props.date}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
              </Card.Body>
            </Card>
          </section>
      </>
    )
  }

}

export default WeatherDay;
