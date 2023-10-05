import React from 'react';
import './App.css'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchQuery: '',
      location: null,
    }
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery : query });
  }

  handleForm = (e) => {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}SEARCH_STRING&format=json
    `)
      .then(response => {
        console.log('SUCCESS: ', response.data);
        this.setState({ location : response.data[0]});
      }).catch(error => {
        console.log('Conncetion not quite right', error);
      });
  }

  handleChange = (e) => {
    this.setState({ searchQuery : e.target.value });
  }

  render() {
    return(
      <>
        <header>
          <h1>CITY EXPLORER</h1>
        </header>

        <form onSubmit={this.handleForm}>
        <input placeholder='Search any city...' type='text' name='city' onChange={this.handleChange}/>
        <button type='submit'>Search</button>

        </form>
        {/* Are the browser router names significant? */}
      </>
    )
  }
}

export default App