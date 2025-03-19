import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Cards.css"; // ✅ Import CSS file

function BodyOnlyExample() {
  return (
    <Container className="mt-4">
      {/* ✅ First Row */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="html-card">
            <Card.Body>HTML</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="css-card">
            <Card.Body>CSS</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="js-card">
            <Card.Body>JavaScript</Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ✅ Second Row */}
      <Row>
        <Col md={4}>
          <Card className="react-card">
            <Card.Body>React</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="node-card">
            <Card.Body>Node.js</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bootstrap-card">
            <Card.Body>Bootstrap</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BodyOnlyExample;
