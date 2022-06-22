import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { FooterPage } from "./footer/FooterPage";
import { SubHeaderPage } from "./sub-header/SubHeaderPage";
export const AppLayout = () => {
  return (
    <>
      <Header />
      <SubHeaderPage />
      <Container>
        <Outlet />
      </Container>
      {/* <FooterPage /> */}
    </>
  );
};
