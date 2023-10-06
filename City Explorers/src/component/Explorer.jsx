import React from 'react';
import { Link } from 'react-router-dom';

let API_KEY = `pk.422798a620f1ff140f475abd27f56444`

class Explorer extends React.Component {

  render(){
    let { location } = this.props;
    
    return(
      <main>
        <Link to='/'>Go Home</Link>
        <section>
          <h2>Maps</h2>
          {/* <p>{this.props.searchQuery}</p> */}
          <h3>Location</h3>
          {/* <p>{location ? location.display_name : 'No location set'}</p>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=9&size=1000x800&format=png&&markers=icon:small-red-cutout|${location.lat},${location.lon}&markers=icon:small-red-cutout|${location.lat},${location.lon}`} /> */}

          {/* <p>Lat: {location ? location.lat : 'No location set'}</p>
          <p>Lon: {location ? location.lon : 'No location set'}</p> */}
        </section>
        <section>
          <h2>Weather</h2>
          <ul>
            {/* {weather.data.map((dailyForcast, index) => (
              <li key={index}>
                
              </li>
            ))} */}
          </ul>
        </section>
      </main>
    )
  }
}

export default Explorer;