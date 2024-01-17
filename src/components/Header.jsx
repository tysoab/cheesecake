import { useState } from "react";
import logo from "../assets/cheesecake.png";
import Button from "../ui/Button";
import style from "./Header.module.css";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function closeToggle() {
    if (toggleMenu) setToggleMenu(false);
  }

  return (
    <header className={style.header}>
      <div>
        <img src={logo} alt="cheesecake" />
      </div>
      <nav>
        <li className={style.active}>
          <a href="#home" onClick={closeToggle}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeToggle}>
            About Us
          </a>
        </li>
        <li>
          <a href="#menu" onClick={closeToggle}>
            Menu
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeToggle}>
            Contact
          </a>
        </li>
      </nav>

      <div className={style.toggleContainer}>
        <Button type="primary">Sign up</Button>

        <div
          className={style["toggle-menu"]}
          onClick={() => setToggleMenu((toggle) => !toggle)}
        >
          <div></div>
        </div>
      </div>

      <div
        className={style["nav-mobile"]}
        style={{
          left: toggleMenu ? "0" : "-100%",
          minHeight: toggleMenu ? "300px" : "0",
        }}
      >
        <div>
          <li>
            <a href="#home" onClick={closeToggle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeToggle}>
              About Us
            </a>
          </li>
          <li>
            <a href="#menu" onClick={closeToggle}>
              Menu
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeToggle}>
              Contact
            </a>
          </li>
        </div>
      </div>
    </header>
  );
}
