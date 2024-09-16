import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='sticky top-0 z-10'>
            <Navbar expand="lg" className="bg-black ">
                <Container>
                    <Navbar.Brand href="#home"><img src="/images/venom-spider-man-logo-spider-wallpaper-thumb.jpg" alt="" className='h-16 lg:h-20 '/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto lg:font-bold text-sm gap-4 lg:gap-10 font-navLinks lg:text-lg ">
                            <Link to='/' className='text-white'>HOME</Link>
                            <Link to='/about-us' className='text-white'>ABOUT US</Link>
                            <Link to='/log-a-complaint' className='text-white'>LOG A COMPLAINT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header