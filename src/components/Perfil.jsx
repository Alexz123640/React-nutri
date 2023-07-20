import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown, Image, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Perfil = () => {
  const navigate= useNavigate()
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    isAuthenticated && (
      <Dropdown>
        <Dropdown.Toggle variant="none">
          <Image
            src={user.picture}
            alt={user.name}
            roundedCircle
            height="45px"
            width="45px"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="">
          <Dropdown.Item to="/perfil">Perfil</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/cocinero")}>Cocinar</Dropdown.Item>
          <Dropdown.Item
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Salir
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
};
