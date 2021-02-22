import React from 'react';
import {Col, Container, Row} from "reactstrap";
import SpecialPricingItem from "./SpecialPricingItem";
function SpecialPricing(props) {
    return (
        <div id='specialPricing'>
            <Container className='font-family-regular'>
                <h2 className='font-family-semi-bold text-center'>Special Pricing</h2>
                <p className='text-center'>We provide wide virity of affordable nail and skin treatments for you. Below <br/>
                you can learn more about the price rage of our services.</p>
                <Row>
                    <Col md={6}><SpecialPricingItem title='Monecure' time='60 - 100' price='50.00' padding='pr-5'/></Col>
                    <Col md={6}><SpecialPricingItem title="Men's Monecure" time='60 - 100' price='40.00' padding='pl-5'/></Col>
                    <Col md={6}><SpecialPricingItem title='Design' time='30 - 40' price='5.00' padding='pr-5'/></Col>
                    <Col md={6}><SpecialPricingItem title='Correction growing' time='30 - 40' price='70.00' padding='pl-5'/></Col>
                    <Col md={6}><SpecialPricingItem title='Changing previous' time='40 - 60' price='5.00 - 10.00' padding='pr-5'/></Col>
                    <Col md={6}><SpecialPricingItem title='Narasheniya' time='40 - 60' price='70.00' padding='pl-5'/></Col>
                    <Col md={6}><SpecialPricingItem title='Gel' time='90 - 120' price='65.00' padding='pr-5'/></Col>
                    <Col md={6}><SpecialPricingItem title='remont odnova nogatyam' time='90 - 120' price='8.00' padding='pl-5'/></Col>
                    <Col md={6}><SpecialPricingItem title='akrepleniya' time='90 - 120' price='5.00' padding='pr-5'/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SpecialPricing;