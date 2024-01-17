import style from "./heading.module.css";
export default function Heading({ children }) {
  return <h1 className={style.heading}>{children}</h1>;
}
