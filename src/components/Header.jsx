import React from "react";
import logo from "../assets/images/ExpenseIt.png";

export default function Header() {
  return (
    <nav className="navbar">
      <input type="checkbox" id="navbar__check" />
      <div className="navbar__logo">
        <a href="index.html">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <div className="navbar__btn">
        <label htmlFor="navbar__check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul className="navbar__items">
        <li className="navbar__list">
          <a href="#income" className="navbar__link">
            Income
          </a>
        </li>
        <li className="navbar__list">
          <a href="#expense" className="navbar__link">
            Expense
          </a>
        </li>
        <li className="navbar__list">
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </li>
        <li className="navbar__list">
          <a href="#faq" className="navbar__link">
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}
