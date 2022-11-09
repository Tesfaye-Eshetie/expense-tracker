import React from "react";

export default function Header() {
  return (
    <nav class="navbar">
      <input type="checkbox" id="navbar__check" />
      <div class="navbar__logo">
        <a href="index.html">
          <img src="#" alt="Logo" />
        </a>
      </div>

      <div class="navbar__btn">
        <label for="navbar__check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul class="navbar__items">
        <li class="navbar__list">
          <a href="#income" class="navbar__link">
            Income
          </a>
        </li>
        <li class="navbar__list">
          <a href="#expense" class="navbar__link">
            Expense
          </a>
        </li>
        <li class="navbar__list">
          <a href="#contact" class="navbar__link">
            Contact
          </a>
        </li>
        <li class="navbar__list">
          <a href="#faq" class="navbar__link">
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}
