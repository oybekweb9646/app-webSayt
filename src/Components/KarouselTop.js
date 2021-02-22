import React from 'react';
import {Col, Container, Row} from "reactstrap";

function KarouselTop(props) {
    return (
        <div className="mt-5 fulltwo position-relative">
            <img src="../images/sabachka.png" className="sabach" width="300" alt=""/>
<Container>
    <Row>
        <Col lg="6">
            <img className="top mt-3" src="../images/karouseltop.png" width="90%" alt=""/>
        </Col>
        <Col lg="6" className="pt-4">

            <h1 className="font-family-bold">Sterilization procces</h1>
            <p className="pr-5 target">Instruments are sterilization after each customer. <br/> Sterilization procces. <br/> Instruments are placed in a disinfectant solution (Barbicide) on a <br/> daily basis for 10-20 minutes, rinsed with water
            dried and put in an individual bag sealed with a steaker indicator. thereafter , this bag is placed in a dry heat own for 60 minutes @180degres celcious
            </p>
            <h1 className="font-family-bold">Guarantee</h1>
            <p className="pr-5 target">We choose only top quality and most advance brands from Russia , Japan  and Germany. We stand behind our work and products , Nevertheless, if something happens to the coverage within 5 days of service please let us know and we will fix it asap . we are looking for 100% satisfaction!!!
            </p>
        </Col>

    </Row>
</Container>
        </div>
    );
}

export default KarouselTop;