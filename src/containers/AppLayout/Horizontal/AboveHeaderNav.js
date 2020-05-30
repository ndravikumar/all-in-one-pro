import React from "react";
import Footer from "components/Footer";
import {isIOS, isMobile} from "react-device-detect";
import TopNav from "./Header/TopNav";
import AboveNavHeader from "./Header/AboveNavHeader";

const AboveHeaderNav = (props) => {

  if (isIOS && isMobile) {
    document.body.classList.add("ios-mobile-view-height");
  } else if (document.body.classList.contains("ios-mobile-view-height")) {
    document.body.classList.remove("ios-mobile-view-height");
  }

  return (
    <div className="app-container">
      <div className="app-main-container">
        <div className="app-header app-header-horizontal">
          <TopNav styleName="app-top-header"/>
          <AboveNavHeader/>
        </div>

        <main className="app-main-content-wrapper">
          <div className="app-main-content">
            {props.children}
          </div>
          <Footer/>
        </main>
      </div>
    </div>
  );
};

export default AboveHeaderNav;
