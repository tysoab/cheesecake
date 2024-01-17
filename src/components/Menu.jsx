import Heading from "../ui/Heading";
import MenuItem from "./MenuItem";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";

import style from "./Menu.module.css";

const menus = [
  {
    title: "Blueberry Cheesecake",
    desc: "Blueberry love, cheesecake delight",
    price: 9,
    image: menu1,
  },
  {
    title: "Biscoff Cheesecake",
    desc: "Biscoff adores cheesecake magic",
    price: 11,
    image: menu2,
  },
  {
    title: "Chocolate Cheesecake",
    desc: "Cherish chocolate, relic cheesecake magic",
    price: 10,
    image: menu3,
  },
];

export default function Menu() {
  return (
    <>
      <Heading>Our Menu</Heading>
      <section className={style.menu} id="menu">
        {menus.map((menu) => (
          <MenuItem key={menu.title} menu={menu} />
        ))}
      </section>
    </>
  );
}
