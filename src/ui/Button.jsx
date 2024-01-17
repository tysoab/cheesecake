import style from "./Button.module.css";

export default function Button({ type, children }) {
  if (type === "primary")
    return <button className={style.button}>{children}</button>;
  if (type === "secondary")
    return (
      <button className={`${style.button} ${style.secondary}`}>
        {children}
      </button>
    );
}
