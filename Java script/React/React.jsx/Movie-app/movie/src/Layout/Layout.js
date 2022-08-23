import React from "react";
import HeaderTop from "../Components/HeaderTop/HeaderTop";
import HeaderMain from "../Components/HeaderMain/HeaderMain";
import HeaderBottom from "../Components/HeaderBottom/HeaderBottom";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <HeaderMain>
        <div className="Header-top">
          <HeaderTop />
        </div>
        <div className="Header-bottom">
          <HeaderBottom />
        </div>
      </HeaderMain>
      <div className="Layout__container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
