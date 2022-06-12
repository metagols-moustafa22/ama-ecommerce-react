import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
