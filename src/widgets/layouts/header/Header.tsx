import React from "react";
import "./HeaderStyles.scss";
import { Container, Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { enKey } from "../../../utils/languages/en";
import { NumberSchema } from "yup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export const Header: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const NavLink = ({ children, onClick }: any) => {
    return (
      <Nav.Link className="" onClick={onClick ? onClick : null}>
        {children}
      </Nav.Link>
    );
  };

  const Carts = ({ img, count }: any) => {
    return (
      <div className="cart-wrapper">
        <div className="counters">{count}</div>
        <img src={img} alt="" />
      </div>
    );
  };

  const itemsData = [
    { item: "التلفزيون والفيديو" },
    { item: "الهواتف المحمولة" },
    { item: "أجهزة اللوحية" },
    { item: "الساعات" },
    { item: "التلفزيون" },
    { item: "الكمبيوتر" },
    { item: "الكاميرات" },
    { item: "الأدوات الذكية" },
  ];

  const recentlySeenItems = [
    { item: "للتلفزيون والفيديو" },
    { item: "الهواتف المحمولة" },
    { item: "المنزل الذكي" },
    { item: "والأجهزة اللوحية" },
    { item: "أجهزة الكمبيوتر" },
    { item: "التكنولوجيا القابلة للارتداء" },
    { item: "إلكترونيات السيارات" },
    { item: "تسوق أفضل العلامات التجارية" },
    { item: "العروض اليومية" },
  ];

  const NavTopMost = () => {
    return (
      <>
        <div className="nav-top-most">
          <NavLink>{t(enKey.us_dollar)}</NavLink>
          <NavLink>{t(enKey.english)}</NavLink>
          <NavLink>تتبع الطلب</NavLink>
          <NavLink>المساعدة والاتصال</NavLink>
          <NavLink>بيع في سوق الجهاز العربي</NavLink>
        </div>
        <div className="nav-middle">
          <div className="d-flex flex-column auth-btns">
            <NavLink className="auth-btns">تسجيل الدخول</NavLink>
            <NavLink className="auth-btns">إنشاء حساب</NavLink>
          </div>
          <Carts img="/assets/icons/truck.svg" count="3" />
          <Carts img="/assets/icons/heart.svg" count="0" />
          <Carts img="/assets/icons/cart.svg" count="12" />

          <div className="d-flex flex-column search-bar" style={{ gap: "15px" }}>
            <div className="d-flex" style={{ width: "100%" }}>
              <button className="search-btn">
                <img src="/assets/icons/search.svg" alt="" />
              </button>
              <input className="search-input" placeholder="أنا أتسوق ل..." type="text" />
              <button className="search-all-btn">الكل</button>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <span className="items">الأكثر رواجًا:</span>
              {itemsData.map((el) => (
                <span className="items">#{el.item}</span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div id="main-header">
        <Navbar expand="lg">
          <Navbar.Toggle />
          {/* <Navbar.Collapse> */}
          <div className="all-nav-items">
            <NavTopMost />
          </div>

          {/* </Navbar.Collapse> */}
          <div className="navbar-brand">
            <a href="/">
              <img src="/assets/images/logo.svg" alt="" />
            </a>
          </div>
        </Navbar>
      </div>
      <div className="recently-seen-bar">
        <span className="recently-seen">شوهد مؤخرا</span>
        {recentlySeenItems.map((el) => (
          <div className="recently-seen d-flex" style={{ gap: "10px" }}>
            <div className="vl"></div>
            <span>{el.item}</span>
          </div>
        ))}
      </div>
    </>
  );
};
