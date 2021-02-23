import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const header = `
ФРАНЦУЗСКИЙ "ЧЕЛОВЕК-ПАУК" ВНОВЬ ЗАЛЕЗ НА НЕБОСКРЕБ В ПАРИЖЕ
`;

const text = `
Знаменитый покоритель небоскребов – французский скалолаз Ален Робер (Alain Robert), более известный как "человек-паук", — взобрался на небоскреб компании Total в деловом районе Дефанс на северо-западе Парижа, сообщает газета Est Republicain.

По данным издания, 53-летний верхолаз без какой-либо страховки забрался на башню высотой 187 метров менее чем за 45 минут, несмотря на ледяной ветер.
За восхождением Робера наблюдали сотрудники служб безопасности, а также работники компании и прохожие, которые встретили скалолаза аплодисментами.
`;

export const FrenchSpiderMan = () => (
  <Container>
    <h4>{header}</h4>
    <Row>
      <Col xs={6} md={4}>
        <Image src="https://4sport.ua/_upl/2/1459/1394436175_c.jpg" rounded />
      </Col>
    </Row>
    <div>{text}</div>
  </Container>
);
