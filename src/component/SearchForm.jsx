import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchForm extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <>
        <form onSubmit={this.props.handleform}>
        <input placeholder='Search any city...' type='text' name='city' onChange={this.props.handlechange}/>

        <Button type='submit' variant='light'>
          Explore
        </Button>

        </form>
      </>
    )
  }
}

export default SearchForm;