import React, { Component } from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";

import "./modal.scss";

class Modal extends Component {
  render() {
    const { item, visible, closeModal, addToCart, openCart } = this.props;

    const { name, abv, tagline, image_url, description } = item;

    const onClick = (event) => {
      event.stopPropagation();

      addToCart(item);

      closeModal();

      openCart();
    };

    return (
      <BootstrapModal show={visible} onHide={closeModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{name}</BootstrapModal.Title>
        </BootstrapModal.Header>

        <BootstrapModal.Body>
          <h5>{tagline}</h5>

          <h6>ABV: {abv}</h6>

          <div className="description">
            <img src={image_url} alt={name}></img>

            {description}
          </div>
        </BootstrapModal.Body>

        <BootstrapModal.Footer>
          <Button variant="success" onClick={onClick}>
            Add to cart
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    );
  }
}

export default Modal;
