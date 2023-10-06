import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorAlert extends React.Component{

  render(){

    return(
      <>
        <Modal show={this.props.showForm} onHide={this.props.toggleForm} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Connectivitiy Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.errorcode}</Modal.Body>
        </Modal>
      </>
    )
  }
}

export default ErrorAlert;