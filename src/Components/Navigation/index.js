import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import classes from "./index.module.scss"

const Navigation = () => {
    return (
        <Navbar expand="lg" className={classes.navigation}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`${classes.nav} me-auto`}>
                        <Nav.Link active href="#home">Home</Nav.Link>
                        <NavDropdown title="About Us" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Messages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Our History</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Leadership</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Core Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Accreditation </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Programs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Fountain House Lahore</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fountain House Sargodha</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fountain House Farooqabad</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Institute for Disadvantaged Children</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Haroon Rashid Vocational & Rehabilitation center</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Rasheed Chaudhry Drug Rehabilitation Center </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Akhuwat- Fountain House Khwajasera </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Ayesha Siddiq Compassion Homes</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#whatWeDo">What We Do</Nav.Link>
                        <Nav.Link href="#Events">Events</Nav.Link>
                        <Nav.Link href="#PPRC">PPRC</Nav.Link>
                        <Nav.Link href="#liveCounseling">Live  Counseling</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#link" className={classes.greenBg}>Donate</Nav.Link>
                        <Nav.Link href="#link"className={classes.blank}></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation