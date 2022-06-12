import React from "react";
import "./HeaderStyles.scss";
import { Container, Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { enKey } from "../../../utils/languages/en";
import { NumberSchema } from "yup";

export const Header: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const NavLink = ({ children, onClick }: any) => {
    return (
      <Nav.Link className="" onClick={onClick ? onClick : null}>
        <div style={{ width: "0.5vw" }} />
        {children}
      </Nav.Link>
    );
  };

  const NavTopMost = () => {
    return (
      <div className="nav-top-most">
        <NavLink>{t(enKey.us_dollar)}</NavLink>
        <NavLink>{t(enKey.english)}</NavLink>
        <NavLink>تتبع الطلب</NavLink>
        <NavLink>المساعدة والاتصال</NavLink>
        <NavLink>بيع في سوق الجهاز العربي</NavLink>
      </div>
    );
  };

  return (
    <div id="main-header">
      <Navbar expand="lg">
        <Navbar.Toggle />
        {/* <Navbar.Collapse> */}
        <div className="all-nav-items">
          <NavTopMost />
        </div>
        <div className="navbar-brand">
          <a href="/">
            <img src="/assets/images/logo.svg" alt="" />
            {/* <img src="/assets/images/logo.svg" className="img-logo navbar-brand" alt="ArabMarketingAgency" /> */}
          </a>
        </div>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};
