import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import jedai_logo from '../../../../../../images/JedAI_logo.png';

class Headers extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{padding: '8px 20px'}}>
                <Navbar.Brand as={Link} to="/">
                    <img src={jedai_logo} height="40" alt="JedAI Logo" style={{marginRight: '10px'}} />
                    <span style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}}>JedAI WebApp</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" style={{color: 'rgba(255,255,255,0.8)'}}>
                            <span className="fa fa-home" style={{marginRight: '5px'}} />
                            Home
                        </Nav.Link>
                        <Nav.Link href="https://jedai.scify.org/" target="_blank" rel="noopener noreferrer" style={{color: 'rgba(255,255,255,0.8)'}}>
                            <span className="fa fa-book" style={{marginRight: '5px'}} />
                            Docs
                        </Nav.Link>
                        <Nav.Link href="https://github.com/scify/JedAIToolkit" target="_blank" rel="noopener noreferrer" style={{color: 'rgba(255,255,255,0.8)'}}>
                            <span className="fa fa-github" style={{marginRight: '5px'}} />
                            GitHub
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Headers;
