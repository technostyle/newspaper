import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CaucasianPrisoner from "video/caucasian-prisoner.mp4";

const header = `Видеотека`;

export const VideoStore = () => (
  <Container>
    <h4>{header}</h4>

    <Row>
      <Col xs={12}>
        <video
          controls
          autoplay
          width="400"
          height="300"
          src={CaucasianPrisoner}
          type="video/mp4"
        ></video>
      </Col>
    </Row>
  </Container>
);
