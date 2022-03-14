import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../img/Image/adult-blur-blurred-background-687824.png'
import img2 from '../../../img/Image/chef-cook-food-33614.png'
import img3 from '../../../img/Image/architecture-building-city-2047397.png'
import './About.css'

const About = () => {
    return (
        <div className='mt-5'>
            <Container className='mt-5'>
                <h1>Why you choose us</h1>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic ab totam eligendi nulla earum illo quam eius vel fugit. Est vero, facere velit ab perspiciatis quod provident modi, suscipit unde, quam voluptates eligendi quibusdam necessitatibus laboriosam possimus commodi itaque.</p>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className='border-0 card-container'>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title><i className="about-icon fas fa-bus p-2"></i> Fast Delivery</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae sed porro nulla asperiores necessitatibus voluptatem dicta! Ducimus, cumque provident?
                                </Card.Text>
                                <div>
                                    <p><span className='text-primary'>See More </span> <i className="more-icon p-1 fas fa-arrow-right"></i></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0 card-container'>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title><i className="about-icon p-2 far fa-bell"></i> A Good Auto Responder</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptate accusamus quaerat quis ad cumque et ullam alias harum sapiente!
                                </Card.Text>
                                <div>
                                    <p><span className='text-primary'>See More </span> <i className="more-icon p-1 fas fa-arrow-right"></i></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0 card-container'>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title><i className="about-icon p-2 fas fa-truck"></i> Home Delivery</Card.Title>
                                <Card.Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis pariatur. Nobis quasi dolore temporibus asperiores esse! Earum, architecto accusamus?
                                </Card.Text>
                                <div>
                                    <p><span className='text-primary'>See More </span> <i className="more-icon p-1 fas fa-arrow-right"></i></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;