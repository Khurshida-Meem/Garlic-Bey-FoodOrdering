import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../img/logo.png'

const Footer = () => {
    return (
        <div className='mt-5 footer-bg'>
            <Container className='mt-5 py-2 '>
                <Row sm={1} md={2}>
                    <Col className='mt-3'>
                        <img src={logo} alt="" className='w-25' />
                    </Col>
                    <Col>
                        <div className='d-lg-flex justify-content-between'>
                            <div className='mt-3'>
                                <p className='text-white'>About Online Food</p>
                                <p className='text-white'>Read Our Blog</p>
                                <p className='text-white'>Sign up to deliver</p>
                                <p className='text-white'>Add your restaurant</p>
                            </div>
                            <div className='mt-3'>
                                <p className='text-white'>Get help</p>
                                <p className='text-white'>Read FAQs</p>
                                <p className='text-white'>View all cities</p>
                                <p className='text-white'>Restaurants near me</p>
                            </div>
                        </div>

                    </Col>
                </Row>
                <hr />
                <Row sm={1} md={2}>
                    <Col>
                        <small className='text-secondary'>Copyright &copy; 2022, Garlic Bey</small>
                    </Col>
                    <Col>
                        <div className='d-lg-flex justify-content-evenly'>
                            <p className='text-secondary'>Privacy Policy</p>
                            <p className='text-secondary'>Terms of Use</p>
                            <p className='text-secondary'>Pricing</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;