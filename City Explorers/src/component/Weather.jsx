import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

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
          {console.log(this.props.weather)}
          {this.props.weather.length > 0 && 
            this.props.weather.map(item => 
              <>
                <Table striped bordered hover size="sm">
                  <tbody>                
                    <tr>
                      <td>{item.date}</td>
                      <td>{item.description}</td>
                    </tr>
                  </tbody>
                </Table>
              </>
              )
          }
      
      </section>
    )
  }
}

export default Weather;
