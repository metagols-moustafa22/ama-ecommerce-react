import React from "react";
import "./SubHeaderStyles.scss";
import { Row, Col, Dropdown } from "react-bootstrap";
import "../../../index.scss";

export const SubHeaderPage: React.FC = () => {
  return (
    <div id="SubHeader">
      <Row>
        <Col lg={3}>
          <Dropdown className="search-category-dropdown d-flex justify-content-end category-btn">
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <span className="d-flex justify-content-center align-items-center fs-14" style={{ gap: "8px" }}>
                <img src="/assets/icons/category.svg" alt="" />
                Category
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col lg={6}>
          <div className="sub-header-contents d-flex justify-content-center align-items-center" style={{ gap: "15px" }}>
            <a href="" className="fs-14">
              Home
            </a>
            <Dropdown className="d-flex justify-content-end new-product-btn">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <span className="d-flex justify-content-center align-items-center fs-14" style={{ gap: "8px" }}>
                  New Product
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex" style={{ gap: "5px" }}>
              <a href="" className="fs-14">
                On Sale
              </a>
              <div className="hot fs-12">hot</div>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div
            className="sub-header-contents d-flex justify-content-start align-items-center"
            style={{ gap: "20px", height: "100%" }}
          >
            <div className="d-flex justify-content-between align-items-center" style={{ gap: "5px" }}>
              <img src="/assets/icons/truck.svg" alt="" />
              <a href="" className="fs-14">
                Track Your Order
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{ gap: "5px" }}>
              <img src="/assets/icons/user.svg" alt="" />
              <a href="" className="fs-14">
                Sign In/Register
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
