// components/Home.js
import { Heading } from '@aws-amplify/ui-react';
import {Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';export function Home() {
  return (
    <div>
      <Container>
        <Row><Heading>ADSC: Automated Digital Store Creation</Heading></Row>
        <Row><Heading>The Future of Online Retail and Investments</Heading></Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>What we do?</Card.Header>
              <p>In simple terms...If you woke up tomorrow and had some extra money you wanted to invest ...</p>
              <p>Our software will launch and manage a store for you within minutes utilizing full automation ...</p>
              <p>The costs are minimal and the service is very close to risk-free for the user...</p>
              <p>Simply put investing a little money you would be making passing income within a few day!</p>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card>
                    <Card.Header>Cloud Analytics Modernization</Card.Header>
                    <Card.Body>Everything works in the cloud and the user can finish the process end to end within minutes online!</Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                    <Card.Header>Speed and Reliability</Card.Header>
                    <Card.Body>ADSC is close to risk free for the user and has the users store up and running within minutes!</Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                    <Card.Header>Versatility in Application</Card.Header>
                    <Card.Body>Our product is able to rapidly adapted and sell products that have the highest profit margins based on the current market!</Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                    <Card.Header>Full Customer Experience Service</Card.Header>
                    <Card.Body>From the beginning to the end of the process our service takes care of everything!</Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>Understanding ADSC</Card.Header>
              <Card.Body>
                <p>ADSC is a Software as a Service product that creates retail stores on sites such as Amazon.</p>
                <p>Our product is end to end: This means that once you sign up our product will take care of the following ...</p>
                <ListGroup as="ol">
                  <ListGroup.Item as="li">Finding products to sell that have high profit margins and demand</ListGroup.Item>
                  <ListGroup.Item as="li">Ordering the products from wholesalers and applying private labeling if necessary</ListGroup.Item>
                  <ListGroup.Item as="li">Shipping products to fulfillment centers when ordered</ListGroup.Item>
                  <ListGroup.Item as="li">Managing fulfillment and customer feedback and returns</ListGroup.Item>
                  <ListGroup.Item as="li">And More!</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Are You Ready to Accelerate Your Business?</Card.Header>
              <Card.Body>Head to the signup page in order to begin your ADSC experience!</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}