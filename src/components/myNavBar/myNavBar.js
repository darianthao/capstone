import {Component} from "react";
import {Navbar, Container, NavLink, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import bestBuyLogo from "./BestBuyLogo.png";
import './myNavBar.css';


class NavBar extends Component {
    render() {
        return (

            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt="/404"
                                src={bestBuyLogo}
                                height="45px"
                                width="60px"
                                className="d-inline-block align-top"

                            />{' '}
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/ActionCameraPage">Action Camera's</NavLink>
                            <NavLink href="/DSLRPage">DSLR Camera's</NavLink>
                            <NavLink href="/PSPage">Point & Shoot Camera's</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default NavBar