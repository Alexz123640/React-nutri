import { useAuth0 } from "@auth0/auth0-react";
import { Image, Spinner } from "react-bootstrap";

export const Perfil = () => {
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
      <div>
        <Image
          src={user.picture}
          alt={user.name}
          roundedCircle
          height="45px"
          width="45px"
        />
      </div>
    )
  );
};
