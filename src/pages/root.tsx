import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Fetch from "../fetch";
import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { Button } from "react-bootstrap";
import { signOutScript } from "../auth/auth_signout_password";

export const swdataContext = createContext(await Fetch());

export default function Root () {
    app;
    const [user,setUser] = useState<string | null | undefined>(null);

    useEffect(() => {
        return () => {}
  }, [onAuthStateChanged(getAuth(),(usert) => setUser(usert?.email))])
    

    function loginStatus() {
        if (getAuth().currentUser) {
            return (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/">Homepage</Nav.Link>
                        <Nav.Link as = {Link} to="/List">List</Nav.Link>
                        <Nav.Link as = {Link} to="/Chat">Chat</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/">Hello {user}</Nav.Link>
                        <Button onClick={signOutScript}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            )
        } else {
            return(
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/">Homepage</Nav.Link>
                        <Nav.Link as = {Link} to="/List">List</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/Login">Login</Nav.Link>
                        <Nav.Link as = {Link} to="/Register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                )
        }
    }

    return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand>Star Wars Database</Navbar.Brand>
            <br></br>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {loginStatus()}
        </Container>
        </Navbar>
            <Outlet/>
    </>
    )
}