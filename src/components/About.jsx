import Button from "../ui/Button";
import style from "./About.module.css";
import aboutIcon from "../assets/about-image.png";

export default function About() {
  return (
    <section className={style.about} id="about">
      <img src={aboutIcon} alt="cheesecake" />
      <div>
        <h1>We Love Cheesecake</h1>
        <h4>Discover Our Cheesecake Story</h4>
        <p>
          At Cheesecake Love, quality is our cornerstone. Each cheesecake is
          crafted with the finest ingredients, meticulous attention to detail,
          and a dash of creativity. We believe in delivering not just desserts
          but moments of sheer indulgence.
        </p>
        <Button type="secondary">Read More</Button>
      </div>
    </section>
  );
}
