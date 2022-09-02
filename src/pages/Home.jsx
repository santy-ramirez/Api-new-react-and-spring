import React from 'react';
import image from "../assets/home-min.jpg"
import image2 from "../assets/firtstep-min.gif"
import image3 from "../assets/secordstep-min.gif"
import image4 from "../assets/trestep-min.gif"


import NavComponent from './NavComponent';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Home(props) {
    return (
        <div>
            <NavComponent></NavComponent>

            <Container>
                <Row>
                    <Col md="12" lg="6">
                        <div className="description_hero">
                            <h1 className="title__one">welcome the </h1>
                            <h2 className="title__two">news search</h2>
                            <p>This web-app you cant the last news the worlk </p>
                            <Link to="/search">
                                <Button className="desctiption__button">Get start</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md="12" lg="6">
                        <img className="hero__image" src={image} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="mx-auto my-4" style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title>first step</Card.Title>
                                <Card.Text>
                                    click start, to start looking for the latest world news and
                                    find out everything.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mx-auto my-4" style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title>second step</Card.Title>
                                <Card.Text>
                                    Write in the input , a word or phrase greater than three
                                    characters and click search.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-auto my-4" style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={image4} />
                            <Card.Body>
                                <Card.Title>third step</Card.Title>
                                <Card.Text>
                                    Scroll through the news lists and click read if you are
                                    interested in news.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;