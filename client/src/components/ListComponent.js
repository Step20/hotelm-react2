import React, { useState, useEffect } from "react";
import ModalPage from "./ModalComponent.js";
import { Container, Row, Col, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import king from "../assets/king.jpg";

export default function List() {
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState([]);

  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);
  const toggle = (hotel) => {
    setHotel(hotel);
    console.log(hotel);
    setModal(!modal);
  };
  function handleCloseModal(event, data) {
    setModal(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }

  // const getHotels = async () => {
  //   console.log(hotels);
  //   return await axios.get("api/hotels");
  // };

  useEffect(() => {
    (async () => {
      await axios.get("/api/hotels").then((res) => {
        setHotels(res.data);
        console.log(res.data);
      });
    })();
  }, []);

  return (
    <div className="list mx-auto">
      <Fade up cascade="true" duration="1500">
        {" "}
        <Container className="list-content">
          <Row className="row mx-auto">
            {hotels.map((hotel) => (
              <Col xs="12" sm="6" md="4" className="hbox" key={hotel._id}>
                <img src={hotel.photos[0]} alt="Hotel photos" />
                <div className="top mt-3">
                  <h4>{hotel.name}</h4>
                  <h4 className=" ms-auto">
                    ${hotel.cheapestPrice} <span className="light">/night</span>
                  </h4>
                </div>
                <p>{hotel.desc}</p>
                <Button className="btn" onClick={() => toggle(hotel)}>
                  {" "}
                  Book Now
                </Button>{" "}
              </Col>
            ))}
          </Row>{" "}
          <ModalPage
            data={hotel}
            isOpen={modal}
            onCloseModal={handleCloseModal}
            onAfterOpen={handleAfterOpen}
          />
        </Container>
      </Fade>
    </div>
  );
}
