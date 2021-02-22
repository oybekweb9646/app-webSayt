import React from 'react';
import {Col, Container, Row} from "reactstrap";

function NavbarBody(props) {
    return (
        <div className="bgcolor ">

            <Container className="kampversionbody">
              <Row>
                <Col lg="6" className="topContent">
            <h1 className="font-family-bold">
                Be Different With Our Nail Design
            </h1>
                    <p>Our Quailified team provides a full range of <br/> nail design services to satisfy even the most demanding clients</p>
                    <img className="rasm" src="../images/navnaqsh.png" width={280}  alt=""/>
                </Col>
                <Col lg="6">
                    <img className=" mr-3 layer" src="../images/layer.png" width={640} alt=""/>
                    <img className="kuchuk" src="../images/kuchuk.png" alt="" width="250"/>
                </Col>
              </Row>
            </Container>
            <div className="bgcolor py-5 d-none mobileversionbody">
                <img className=" mr-3" src="../images/layer.png" alt=""/>
                <div className="text">
                <h1 className="text-center">
                    Be Different With <br/> Our Nail Design
                </h1>
                    <div className="d-flex justify-content-center">
                    <button type="button" className="btn bg-transparent px-3 py-1 border rounded"><h5>Read More</h5></button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NavbarBody;