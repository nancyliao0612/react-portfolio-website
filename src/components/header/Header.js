import React from "react";
import "./header.css";
// asset
import ME from "../../assets/me.png";
// components
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div class="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Nancy Liao</h1>
        <h5 class="text-light">Frontend Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div class="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
