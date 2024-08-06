import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Fetch from "../fetch";
import { createContext } from "react";

export const swdataContext = createContext(await Fetch());

export default function Root () {

    return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>Star Wars Database</Navbar.Brand>
            <br></br>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as = {Link} to="/">Homepage</Nav.Link>
                <Nav.Link as = {Link} to="/List">List</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <div id="detail">
            <Outlet/>
        </div>
    </>
    )
}