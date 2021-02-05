import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import OfficeBanner from "./OfficeBanner";
import RandomQuote from "./RandomQuote";

const App = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <OfficeBanner />
                </Col>
            </Row>

            <Row>
                <Col>
                    <RandomQuote />
                </Col>
            </Row>
        </Container>
    );
};

export default App;