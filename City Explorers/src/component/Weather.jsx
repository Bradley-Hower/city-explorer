import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Row, Col } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section>
        <br />
        <h2><b>Weather</b></h2>
          <h2>{this.props.location ? this.props.location.display_name : 'No location set'}</h2> 
          <br /><br />
          <Button variant='light' onClick={this.props.showweather}>Show me the weather forecast</Button>
          <br /><br />
        <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Weather</th>
                  </tr>
                </thead>
          </Table>
          {this.props.weather.length > 0 && 
              <>
                <Table striped bordered hover size="sm">
                  <tbody>
                  <Row xs={7} md={7} className="g-4">
                    {this.props.weather.map((item, idx) => (
                    <Col key={idx}>
                      <WeatherDay date={item.date}  description={item.description}/>
                    </Col>
                  ))}
                  </Row>

                  </tbody>
                </Table>
              </>
          }
      
      </section>
    )
  }
}

export default Weather;
