import React, { Component } from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";

class Modal extends Component {
  render() {
    const { item, visible, closeModal } = this.props;

    const { name } = item;

    return (
      <BootstrapModal show={visible} onHide={closeModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{name}</BootstrapModal.Title>
        </BootstrapModal.Header>

        <BootstrapModal.Body></BootstrapModal.Body>

        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>

          <Button variant="success" onClick={alert}>
            Add
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    );
  }
}

export default Modal;
