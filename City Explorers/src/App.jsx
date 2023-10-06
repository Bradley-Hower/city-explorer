import React from 'react';
import './App.css'
import axios from 'axios';
import Explorer from './component/Explorer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ErrorAlert from './component/ErrorAlert';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchQuery: '',
      location: null,
      errorcode: null,
      showForm: false,
    }
  }


  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm});
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery : query });
  }

  handleForm = (e) => {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        console.log('SUCCESS: ', response.data);
        this.setState({ location : response.data[0]});
      }).catch(error => {
        console.log('Connection not quite right', error.stack.status);
        // this.setState({errorcode: error.stack.response.status});
        this.setState({showForm: true});
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


        <BrowserRouter>
        <form onSubmit={this.handleForm}>
        <input placeholder='Search any city...' type='text' name='city' onChange={this.handleChange}/>
        <Button type='submit' variant='light'>
          <Link to='/search'>Explore</Link>
        </Button>
        </form>
          <Routes>
            <Route exact path='/search' element={<Explorer location={this.state.location} query={this.state.searchQuery} />} />
            <Route path='/' element={<p>Please enter a location.</p>} />
          </Routes>
        </BrowserRouter>
        <ErrorAlert showForm={this.state.showForm} toggleForm={this.toggleForm}/>
      </>
    )
  }
}

export default App