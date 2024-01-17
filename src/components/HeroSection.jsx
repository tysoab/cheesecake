import style from "./HeroSection.module.css";
import mainIcon1 from "../assets/hero-image.png";
import mainIcon2 from "../assets/vector.png";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className={style.hero} id="home">
      <div>
        <h1>Bite The World of Cheesecake Wonders</h1>
        <p>
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className={style.actions}>
          <Button type="secondary">Get started</Button>
          <Button type="primary">
            <div>
              <img src={mainIcon2} alt="cheesecake" />
              <span>Watch Demo</span>
            </div>
          </Button>
        </div>
      </div>
      <img src={mainIcon1} alt="cheesecake" />
    </section>
  );
}
