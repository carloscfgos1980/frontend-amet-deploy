import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./Amet_Logo.png"
import ShoppingCart from './components/ShoppingCart';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="container-fluid bg-dark py-3">
            <ShoppingCart />
            <div className="row justify-content-between align-items-center">
                <div div className="col-sm-3 text-center py-1">
                    <img src={logo}
                        width="20%"
                        className="d-inline-block align-top"
                        alt="Logo" />
                </div>
                <div div className="display-3 col-sm-4 text-center text-light py-1">Amet Laza</div>
                <div className="col-sm-5 text-center">
                    <nav className="navbar">
                        <div className="mx-5">
                            <Link className="m-1 btn btn-warning" to="/">Home</Link>
                            <Link className="m-1 btn btn-warning" to="/about">About</Link>
                            <Link className="m-1 btn btn-warning" to="/paintings">Paintings</Link>
                            <Link className="m-1 btn btn-warning" to="/performance">Performance</Link>
                            <Link className="m-1 btn btn-warning" to="/video-art">Video Art</Link>
                            <Link className="m-1 btn btn-warning" to="/gallery">Gallery</Link>
                            <Link className="m-1 btn btn-warning" to="/shop">Shop</Link>
                            <Link className="m-1 btn btn-warning" to="/contact">Contact</Link>
                        </div>
                    </nav>
                </div>
                {/* <div className="col-sm-5 text-end">
                    <Navbar expand="lg" variant='dark'>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link to="/">Home</Nav.Link>
                                    <Nav.Link to="/about">About</Nav.Link>
                                    <NavDropdown title="Works" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/paintings">Paintings</NavDropdown.Item>
                                        <NavDropdown.Item href="/performance">
                                            Performance
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/video-art">Video Art</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                                    <Nav.Link href="/shop">Shop</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div> */}
            </div>
        </div>
    );
}

export default NavBar;