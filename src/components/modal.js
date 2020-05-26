import React, { Component } from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";

class Modal extends Component {
  render() {
    const { item, visible, closeModal, addToCart } = this.props;

    const { name, tagline, description } = item;

    return (
      <BootstrapModal show={visible} onHide={closeModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{name}</BootstrapModal.Title>
        </BootstrapModal.Header>

        <BootstrapModal.Body>
          <h5>{tagline}</h5>

          <div>{description}</div>
        </BootstrapModal.Body>

        <BootstrapModal.Footer>
          <Button variant="success" onClick={() => addToCart(item)}>
            Add to cart
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    );
  }
}

export default Modal;
