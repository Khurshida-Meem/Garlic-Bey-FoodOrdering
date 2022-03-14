import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo2.png'
import './Menu.css'


const Menu = () => {

    const { user, logOut } = useAuth();
    console.log(user);

    return (
        <Navbar bg="light" expand="lg" sticky="top">
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
                                <span className="position-absolute translate-middle badge rounded-pill bg-primary">
                                    1
                                </span>
                            </div>

                        </NavLink>
                        {
                            !user ? <NavLink to='/login' className="menus me-3 p-3 fw-bold ">Login</NavLink> :
                                <div className="mt-2 d-flex align-items-center">
                                    <img src={user.photoURL} className="rounded-circle me-2" height="50px" alt="" />
                                    <span>{user.displayName}</span>
                                    <button className="border-0 bg-light secondary-text fw-bold ms-3" onClick={logOut}>Logout</button>
                                </div>



                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Menu;