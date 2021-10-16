import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png'
import './Menu.css'


const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img src={logo} alt="" height="50px" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to='/home' className="menus me-3 p-3"><i className="fas fa-home"></i></NavLink>
                        <NavLink to='/home' className="position-relative p-3 menus me-3">
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                                <span class="position-absolute translate-middle badge rounded-pill bg-primary">
                                    1
                                </span>
                            </div>

                        </NavLink>
                        <NavLink to='/login' className="menus me-3 p-3 fw-bold ">
                            Login
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Menu;