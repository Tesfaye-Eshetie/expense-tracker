import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Copyright &copy; 2022 Capstone project.</p>
      <a href="#" className="footer__icon">
        <h1 className="footer__icon__h1">
          <BsArrowUpCircleFill />
        </h1>
      </a>
    </footer>
  );
}
