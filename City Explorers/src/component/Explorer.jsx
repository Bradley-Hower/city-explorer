import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';


let API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {


  render(){
    let { location } = this.props;

    return(
      <main>
        <Link to='/' onClick={this.props.clearlocation}>Go Home</Link>
        <section>
          <h1>Maps</h1>
          <p>{this.props.searchQuery}</p>
          <h2>{location ? location.display_name : 'No location set'}</h2>          
          <Badge bg="secondary"><p>Lat: {location ? location.lat : 'No location set'}</p></Badge>
          <Badge bg="secondary"><p>Lon: {location ? location.lon : 'No location set'}</p></Badge>
          <br /><br />
          <Image src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=9&size=1000x800&format=png&&markers=icon:small-red-cutout|${location.lat},${location.lon}&markers=icon:small-red-cutout|${location.lat},${location.lon}`} thumbnail/>


        </section>
      </main>
    )
  }
}

export default Explorer;