import React from 'react';
import './App.css'
import axios from 'axios';
import Explorer from './component/Explorer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ErrorAlert from './component/ErrorAlert';
import SearchForm from './component/SearchForm';
import Weather from './component/Weather';
import Movies from './component/Movies';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      showForm: false,
      location: null,
      errorcode: null,
      weather: [],
      lat: null,
      lon: null,
      movielist: [],
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
    this.setState({ weather: null});
  }

  handleForm = (e) => {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        this.setState({ location : response.data[0]});
        this.setState({ lat : response.data[0].lat});
        this.setState({ lat : response.data[0].lon});
        this.handleMovies();
      }).catch(error => {
        // console.log('Connection not quite right', error.response.status);
        this.setState({errorcode: error});
        this.setState({showForm: true});
      });
  }

  handleMovies = async () => {
    try{
      const movies = await axios.get(`${import.meta.env.VITE_SERVER}/movies?cityquery=${this.state.searchQuery}`);
      this.setState({movielist: movies.data});
    }
    catch (error){
      this.setState({errorcode: error});
      this.setState({showForm: true});
    }
  }

  handleChange = (e) => {
    this.setState({ searchQuery : e.target.value });
  }

  showWeather = async () => {
    try {
      console.log('here')
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/weather?city=${this.state.searchQuery}&lat=${this.state.lat}&lon${this.state.lon}`);
      this.setState({weather: res.data});
    }
    catch (error) {
      this.setState({errorcode: error});
      this.setState({showForm: true});
    }
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
            <Route exact path='/search' element={<><Explorer clearlocation={this.clearLocation} location={this.state.location} query={this.state.searchQuery} /><Weather showweather={this.showWeather} weather={this.state.weather} location={this.state.location}/></>}/>
            <Route path='/' element={<p>Please enter a location.</p>} />
          </Routes>
        </BrowserRouter>
        {this.state.movielist.length > 0 && 
        <Movies movielist={this.state.movielist}/>
        }

        <ErrorAlert showForm={this.state.showForm} toggleForm={this.state.toggleForm} errorcode={this.state.errorcode}/>
      </>
    )
  }
}

export default App