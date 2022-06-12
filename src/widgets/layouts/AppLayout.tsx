import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
export const AppLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
