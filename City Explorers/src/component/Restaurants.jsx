import React from 'react';
import RestaurantsName from './RestaurantsName';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

class Restaurants extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <p>
      <br />
      <h2><b>Restaurants</b></h2>
        <br /><br />
      <Row xs={1} md={4} className="g-4">
      {this.props.restaurantnames.map((restaurant, idx) => (
        <Col key={idx}>
          <RestaurantsName name={restaurant.name} image_url={restaurant.image_url} price={restaurant.price} rating={restaurant.rating} url={restaurant.url}/>
        </Col>
      ))}
      </Row>
      </p>
    )
  }

}

export default Restaurants;