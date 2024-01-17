import style from "./MenuItem.module.css";

import star from "../assets/star.png";

export default function MenuItem({ menu }) {
  const { title, desc, price, image } = menu;
  return (
    <div className={style.menuItem}>
      <div>
        <div className={style["menu-image"]}>
          <img src={image} alt="cheesecake" />
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className={style["price-container"]}>
          <div>
            <span style={{ color: "#53A623", fontSize: "18px" }}>$</span>
            <span style={{ color: "#745545", fontSize: "20px" }}>
              {price.toFixed(2)}
            </span>
          </div>
          <span className={style["star-img"]}>
            <img src={star} alt="cheesecake" />
            <img src={star} alt="cheesecake" />
            <img src={star} alt="cheesecake" />
            <img src={star} alt="cheesecake" />
            <img src={star} alt="cheesecake" />
          </span>
        </div>
      </div>
    </div>
  );
}
