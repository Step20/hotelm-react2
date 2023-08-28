import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MdLocationOn } from "react-icons/md";

export default function ModalPage(props) {
  function afterOpenModal(e) {
    props.onAfterOpen(e, "After Modal Opened");
  }

  console.log(props.data.name);

  function onModalClose(event) {
    props.onCloseModal(event);
  }

  return (
    <div>
      {" "}
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={(e) => afterOpenModal(e)}
        ariaHideApp={false}
        className="modalH"
      >
        <ModalHeader className="title">
          <h1>{props.data.name}</h1>
        </ModalHeader>
        <ModalBody className="body">
          <p>
            <MdLocationOn /> {props.data.address}, {props.data.city}
          </p>
          <img src={props.data.photos} alt="Hotel photos" />
          <p className="text">{props.data.title}</p>
          <p className="type">{props.data.type}</p>
          <p className="desc">{props.data.desc}</p>
          <p>Distance: {props.data.distance}</p>
          <p>Rooms: {props.data.rooms}</p>
          <p className="price">
            Price: ${props.data.cheapestPrice}{" "}
            <span className="light">/night</span>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button className="book-btn" onClick={(e) => onModalClose(e)}>
            Book Now
          </Button>
          <Button className="close-btn" onClick={(e) => onModalClose(e)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
