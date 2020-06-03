import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Button, Card } from "react-bootstrap";
import books from "../data/horror.json";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1> Shiji Book Store </h1>
              <p>
                This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention to featured content or information.{" "}
              </p>{" "}
              <p>
                <Button variant="primary"> READ NOW </Button>{" "}
              </p>{" "}
            </Jumbotron>{" "}
            <Row>
              {books.map((book, index) => {
                console.log(book);
                return (
                  <Col xs={3}>
                    <Card className="mb-4" key={`book-id-${index}`}>
                      <img
                        className="img-fluid"
                        src={book.img}
                        alt={book.title}
                      />
                      <h4>{book.title}</h4>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
