import style from "./Footer.module.css";
import copyLogo from "../assets/copy.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        Copyright <img src={copyLogo} alt="cheesecake" /> 2024 UI by{" "}
        <a href="https://twitter.com/AmenaiSabuwala" target="blank">
          Amena
        </a>{" "}
        | Frontend by{" "}
        <a href="https://www.linkedin.com/in/taiwoyusufsunday" target="blank">
          Tysoab
        </a>{" "}
        | All rights reserved
      </div>
    </footer>
  );
}
