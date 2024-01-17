import style from "./Post.module.css";
export default function Post({ blog }) {
  const { title, content, desc, image } = blog;
  return (
    <div className={style.post}>
      <div>
        <div className={style["img-container"]}>
          <img src={image} alt="cheesecake" />
        </div>
        <h1>{title}</h1>
        <h3>{content}</h3>
        <p>{desc}</p>

        <div className={style.readmore}>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
}
