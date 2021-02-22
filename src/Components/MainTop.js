import React from 'react';
import {Col, Row} from "reactstrap";

function MainTop(props) {
    return (
        <div>

            <Row className="mt-5 pt-5 firstRow">
                <Col lg="6">
                    <Row>
                        <Col lg="6" className="bgcolor p-3">
                            <div className="center"><img src="../images/nail-polish 1.png" width="50" alt=""/></div>

                            <p className="font-family-bold ptext text-white text-center">MainCure</p>
                            <p className="text-center text-white">Our MainCure treatement stimulati nail growth and soften dry, dul skin</p>
                        </Col>
                        <Col lg="6" className="bgcolor p-3">
                            <div className="center"><img src="../images/Group 33.png" width="50" alt=""/></div>
                            <p className="font-family-bold ptext text-white text-center">Predicure</p>
                            <p className="text-center text-white">Our MainCure treatement stimulati nail growth and soften dry, dul skin</p>
                        </Col>
                        <Col lg="12" className="bgcolor p-3">
                            <img src="../images/qiyin.png" width="210" alt=""/>
                            <div className="center"><img src="../images/Group 31.png" width="50" alt=""/></div>

                            <p className="font-family-bold ptext text-white text-center">Neil Art</p>
                            <p className="text-center text-white mb-0">Let Our artists create a stunning and <br/> sustainable nail design for you</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg="6" className="px-0">
                    <img src="../images/col6ga.png" width="100%" alt=""/>
                </Col>
            </Row>
            <Row className="secondRow d-none">
                <Col sm="6" className="bgcolor p-3">
                    <div className="center text-center"><img src="../images/nail-polish 1.png" width="50" alt=""/></div>

                    <p className="font-family-bold ptext text-white text-center">MainCure</p>
                    <p className="text-center text-white">Our MainCure treatement stimulati nail growth and soften dry, dul skin</p>
                </Col>
                <Col sm="6" className="bgcolor text-center p-3">
                    <div className="center"><img src="../images/Group 33.png" width="50" alt=""/></div>

                    <p className="font-family-bold ptext text-white text-center">MainCure</p>
                    <p className="text-center text-white">Our MainCure treatement stimulati nail growth and soften dry, dul skin</p>
                </Col>
                <Col sm="6" className="bgcolor text-center p-3">
                    <div className="center"><img src="../images/nail-polish 1.png" width="50" alt=""/></div>

                    <p className="font-family-bold ptext text-white text-center">MainCure</p>
                    <p className="text-center text-white">Our MainCure treatement stimulati nail growth and soften dry, dul skin</p>
                </Col>
                <Col sm="6" className="bgcolor text-center p-3 position-relative aaaa">
                    <img className="position-absolute bb" style={{top: "-80%", right: "70%",}} src="../images/qiyin.png" width="210" alt=""/>
                    <div className="center"><img src="../images/Group 31.png" width="50" alt=""/></div>

                    <p className="font-family-bold ptext text-white text-center">MainCure</p>
                    <p className="text-center text-white">Our MainCure treatement stimulati nail growth and soften dry, dul skin</p>
                </Col>
            </Row>
        </div>
    );
}

export default MainTop;