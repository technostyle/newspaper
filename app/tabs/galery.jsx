import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const header = `Фотогалерея`

export const Galery = () => (
  <Container>
    <h4>{header}</h4>
    <Row>
        <Col xs={6} md={4}>
        <Image src="https://4sport.ua/_upl/2/1459/1394436175_c.jpg" fluid />
        </Col>
        <Col xs={6} md={4}>
        <Image src="https://pro-extrim.com/wp-content/uploads/2013/11/Alain-Robert.jpg" fluid />
        </Col>
        <Col xs={6} md={4}>
        <Image src="https://life.bodo.ua/upload/files/cm-event/9/8993/image/dcs0hzgvoaedm4h-r1r1h1000w1422zc2.jpg" fluid />
        </Col>
    </Row>
    <Row>
        <Col xs={6} md={4}>
        <Image src="https://womengohigh.ru/engine/wp-content/uploads/2019/08/IMG_1703.jpg" fluid />
        </Col>
        <Col xs={6} md={4}>
        <Image src="https://lh3.googleusercontent.com/proxy/PBj0wuKV9CXVrojq9lAVKRd9UnyXMkdJTxq2_1C9w_gHqgW-kbrFR1ey0BmTzn1eAeEvLxDyQm4xbsDW3DVZPOXcIVG2s3WtTzJN4dU" fluid />
        </Col>
        <Col xs={6} md={4}>
        <Image src="https://cdn24.img.ria.ru/images/07e4/05/07/1571110736_0:159:3078:1890_600x0_80_0_0_feb26ec57827b654d5c800485f50f97a.jpg" fluid />
        </Col>
    </Row>
  </Container>
);

