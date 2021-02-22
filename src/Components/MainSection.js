import React from 'react';
import {Col, Container, Row} from "reactstrap";
import MobileKarousel from "./MobileKarousel";
function MainSection(props) {
    return (
        <div className="bgcolor3">
            <Container className="pt-5">
                <Row className="FullSkrinVersion">
                    <Col lg="6">
                        <img className="ikki" src="../images/sabachka.png" alt=""/>
                        <img src="../images/polni.png" width="75%" alt=""/>
                    </Col>
                    <Col lg="6">
                        <h1 className="mt-4">Meet Our Expert</h1>
                        <p>We employ  the best manucurists and pedicurists in the industry We also educate our own award-winning specialicts through constant traning Here are the most prominent talents of our team who make your dreams come true</p>
                    </Col>
                </Row>
                <Row className="MobileVersionKarousel d-none my-4">
                    <Col xs="12" className="text-center">
                        <h1 className="mt-4">Meet Our Expert</h1>
                        <p>We employ  the best manucurists and pedicurists in the industry We also educate our own award-winning specialicts through constant traning Here are the most prominent talents of our team who make your dreams come true</p>
                    </Col>
                    <Col xs="12">
                        <MobileKarousel></MobileKarousel>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default MainSection;