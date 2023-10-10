import React from 'react';
import './App.css'
import axios from 'axios';
import Explorer from './component/Explorer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ErrorAlert from './component/ErrorAlert';
import SearchForm from './component/SearchForm';


const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchQuery: '',
      showForm: false,
      location: null,
      errorcode: null,
    }
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm});
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery : query });
  }

  clearLocation = () => {
    this.setState({ location: null});
  }

  handleForm = (e) => {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        // console.log('SUCCESS: ', response.data);
        this.setState({ location : response.data[0]});
      }).catch(error => {
        // console.log('Connection not quite right', error.response.status);
        this.setState({errorcode: error});
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
          <SearchForm handleform={this.handleForm} handlechange={this.handleChange}/>
          {this.state.location && <Navigate to='/search' />}
          <Routes>
            <Route exact path='/search' element={<Explorer clearlocation={this.clearLocation} location={this.state.location} query={this.state.searchQuery} />} />
            <Route path='/' element={<p>Please enter a location.</p>} />
          </Routes>
        </BrowserRouter>
        <ErrorAlert showForm={this.state.showForm} toggleForm={this.toggleForm} errorcode={this.state.errorcode}/>
      </>
    )
  }
}

export default App