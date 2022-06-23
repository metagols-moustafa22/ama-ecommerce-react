import React from "react";
import "./HeaderStyles.scss";
import { Container, Navbar, Nav, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { enKey } from "../../../utils/languages/en";
import { NumberSchema } from "yup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  // const {
  //   t,
  //   i18n: { language },
  // } = useTranslation();

  const languages = [
    { value: "EN", label: "English" },
    { value: "AR", label: "عربي" },
  ];

  const customStyles = {
    option: () => ({
      padding: "5px",
      borderBottom: "1px solid #2e8614",
      width: "64px",
      color: "#6D6969",
    }),
    menu: () => ({
      // backgroundColor: "#92bc90",
      // backgroundColor: "#8dd682",
      width: "66px",
      border: "1px solid #2e8614",
      borderRadius: "4px",
      cursor: "pointer",
      padding: "0px",
    }),
    menuList: () => ({
      width: "150px",
    }),
    indicatorsContainer: () => ({
      color: "#2e861",
      border: "1px solid #2e8614",
      borderRadius: "4px",
    }),
    indicatorSeparator: () => ({
      margin: "0px",
    }),
    // valueContainer: () => ({
    //   background: "transparent",
    // }),
  };
  const handleChangeLanguage = (e: any) => {
    // e.value === "EN" ? dispatch(changeLanguageThunk("en")) : dispatch(changeLanguageThunk("ar"))
  };

  return (
    <React.Fragment>
      <div id="main-header">
        <Navbar expand="xl" className="navbar-expand-custom" variant="dark">
          <Row style={{ width: "100%" }}>
            <Col lg={3}>
              <Navbar.Brand>
                <img src="/assets/images/logo.svg" alt="logo" />
              </Navbar.Brand>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100%" }}>
                <div className="header-top">
                  <Nav.Link>
                    <Button variant="light" className="header-btn-light">
                      {t(enKey.header_about_us)}
                    </Button>
                  </Nav.Link>
                  <span className="dot">.</span>
                  <Nav.Link>
                    <Button variant="light" className="header-btn-light">
                      {t(enKey.header_affliate_program)}
                    </Button>
                  </Nav.Link>
                  <span className="dot">.</span>
                  <Nav.Link>
                    <Button variant="light" className="header-btn-light">
                      {t(enKey.header_offfer)}
                    </Button>
                  </Nav.Link>
                  <span className="dot">.</span>
                  <Nav.Link>
                    <Button variant="light" className="header-btn-light">
                      {t(enKey.header_contact_us)}
                    </Button>
                  </Nav.Link>
                  <span className="dot">.</span>
                  <Nav.Link>
                    <Button variant="light" className="header-btn-light">
                      {t(enKey.header_frequently_asked_question)}{" "}
                    </Button>
                  </Nav.Link>
                </div>
                <div className="search-wrapper">
                  <div className="search-input-wrapper">
                    <input className="search-input" placeholder="What are you looking for?" type="text" />
                    <Dropdown className="search-category-dropdown">
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {t(enKey.btn_Category)}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <Button className="btn-search" variant="success">
                    {t(enKey.btn_search)}
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex justify-content-end flex-column">
                <Select
                  styles={customStyles}
                  className="language-select"
                  options={languages}
                  defaultValue={languages[0]}
                  // filterOption={filterOption(e)}
                  onChange={handleChangeLanguage}
                />
                <div className="d-flex carting-btns-wrapper">
                  <Button variant="link">
                    <img src="/assets/icons/favorite.svg" alt="" />
                  </Button>
                  <Button variant="link">
                    <img src="/assets/icons/cart.svg" alt="" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Navbar>
      </div>
    </React.Fragment>
  );
};
