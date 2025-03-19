import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Cardss.css"; // ✅ Importing CSS File

function Cards1() {
  return (
    <Container className="mt-4">
      {/* ✅ First Row */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="html-card">
            <Card.Body>
              <h5>Name: Haroon</h5>
              <hr className="divider" />
              <h5>Role: Graphic Operator</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="css-card">
            <Card.Body>
              <h5>Name: Ahmed</h5>
              <hr className="divider" />
              <h5>Role: Web Developer</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ✅ Second Row */}
      <Row>
        <Col md={6} className="mx-auto">
          <Card className="js-card">
            <Card.Body>
              <h5>Name: Ali</h5>
              <hr className="divider" />
              <h5>Role: Software Engineer</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards1;
