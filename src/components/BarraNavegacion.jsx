import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Perfil } from "./Perfil";
import logo from "../assets/icon-react.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function BarraNavegacion(props) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar expand="lg" className="bg-light py-2">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="d-flex align-items-center">
            <Image className="me-4 " src={logo} width="60px" roundedCircle />
            <label className="text-primary ">Nutri Nutri</label>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className=" justify-content-end">
          <Nav className="  align-items-center justify-content-end">
            
            {isAuthenticated ? (
              <>
                <Link className="ms-3" to="/estado_medico">
                  {props.link2}
                </Link>
                <Link
                  className="ms-3"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  {props.link1}
                </Link>
              </>
            ) : (
              <Nav.Link className="ms-3" onClick={() => loginWithRedirect()}>
                Login
              </Nav.Link>
            )}
            <Nav.Link>
              <Perfil />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
