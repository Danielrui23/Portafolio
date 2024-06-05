import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    // <Navbar sticky="top" expand="lg" className="navbg">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       G<span>D</span>R{" "}
    //       <FontAwesomeIcon
    //         icon={faTerminal}
    //         fade
    //         size="xs"
    //         style={{ color: "#df0707" }}
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <div className="ms-auto navbar-nav">
    //         <a
    //           href="#home"
    //           role="button"
    //           data-rr-ui-event-key="#"
    //           className="nav-link"
    //         >
    //           Inicio
    //         </a>
    //         <a
    //           href="#projects"
    //           role="button"
    //           data-rr-ui-event-key="#"
    //           className="nav-link"
    //         >
    //           Proyectos
    //         </a>
    //         <a
    //           href="#aboutMe"
    //           role="button"
    //           data-rr-ui-event-key="#"
    //           className="nav-link"
    //         >
    //           Sobre Mi
    //         </a>
    //         <a
    //           href="#contact"
    //           role="button"
    //           data-rr-ui-event-key="#"
    //           className="nav-link"
    //         >
    //           Contacto
    //         </a>
    //       </div>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar collapseOnSelect sticky="top" expand="lg" className="navbg">
      <Container>
        <Navbar.Brand href="#home">
          G<span>D</span>R{" "}
          <FontAwesomeIcon
            icon={faTerminal}
            fade
            size="xs"
            style={{ color: "#df0707" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar-nav">
            <Nav.Link
              href="#home"
              role="button"
              data-rr-ui-event-key="#"
              className="nav-link"
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              href="#projects"
              role="button"
              data-rr-ui-event-key="#"
              className="nav-link"
            >
              Proyectos
            </Nav.Link>

            <Nav.Link
              href="#aboutMe"
              role="button"
              data-rr-ui-event-key="#"
              className="nav-link"
            >
              Sobre Mi
            </Nav.Link>

            <Nav.Link
              href="#contact"
              role="button"
              data-rr-ui-event-key="#"
              className="nav-link"
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
