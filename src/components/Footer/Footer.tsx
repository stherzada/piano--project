import React, { FunctionComponent } from "react";
import "./style.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a
        className="autor"
        href="https://github.com/reaperdragon/pianics"
        target="_blank"
      >
        Pianics ©
      </a>{" "}
      {currentYear}
    </footer>
  );
};
