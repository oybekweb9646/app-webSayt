import React from 'react';
import {Button, Col, Container, Row} from "reactstrap";
function NavbarFooter(props) {
    return (
        <div>
        <div className="position-relative full">
            <img className="frame" src="../images/Frame.png" width={600} alt=""/>
            <Container>
                <Row>
                    <Col lg="6">
                        <img className="sabachka" src="../images/sabachka.png" width="400" alt=""/>
                        <img className="nuqta pb-5" src="../images/nuqta.png" width="400" alt=""/>
                        <img className="picture" src="../images/navbarfooterrasm.png" width="400" alt=""/>

                    </Col>
                    <Col lg="6" className="pl-5">

                        <h1 className="text-center mt-5 pt-5 font-family-regular">Why Our Clients <br/> Choose Us</h1>
<p className="mt-5 ml-5">Our salon aims to deliver the best neil design experiense <br/> and top notche custumer service</p>
                  <p className="ml-5 mt-5 new">We use all natural, organic body products hard to find polish brands and  colors, Ipads every at every seats and drink menu featuring fresh pressed juices and hard crafted coffes</p>
                        <Button color="white" className="py-1 px-3 ml-5"><a href="#" className="text-dark">Read more</a></Button>
                    </Col>
                </Row>
            </Container>
        </div>
            <div className="responsFull d-none">
                <img src="../images/picsels.png" width="100%" alt=""/>
                <h1 className="text-center mt-5 pt-5 font-family-regular">Why Our Clients <br/> Choose Us</h1>
                <div className="chiziq"></div>
                <p className="mt-5 ml-5 text-center">Our salon aims to deliver the best neil design experiense <br/> and top notche custumer service</p>
                <p className="ml-5 mt-5 new text-center">We use all natural, organic body products hard to find polish brands and  colors, Ipads every at every seats and drink menu featuring fresh pressed juices and hard crafted coffes</p>
             <div className="d-flex justify-content-center">   <Button color="white" className="py-1 border px-3 ml-5"><a href="#" className="text-dark">Read more</a></Button>
            </div></div>
            <div className="responsFullhd d-none"><div>
                <h1 className="text-center mt-5 pt-5 font-family-regular">Why Our Clients <br/> Choose Us</h1>
                <div className="chiziq"></div>
                <p className="mt-5 ml-5 text-center">Our salon aims to deliver the best neil design experiense <br/> and top notche custumer service</p>
                <p className="ml-5 mt-5 new text-center">We use all natural, organic body products hard to find polish brands and  colors, Ipads every at every seats and drink menu featuring fresh pressed juices and hard crafted coffes</p>
             <div className="d-flex justify-content-center">   <Button color="white" className="py-1 border px-3 ml-5"><a href="#" className="text-dark">Read more</a></Button>
             </div>
                 <img src="../images/picsels.png" width="100%" alt=""/>
            </div></div>
        </div>
    );
}

export default NavbarFooter;