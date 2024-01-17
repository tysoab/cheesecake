import x from "../assets/x.png";
import i from "../assets/i.png";
import y from "../assets/y.png";
import f from "../assets/f.png";
import style from "./Contact.module.css";

import contactImage from "../assets/contact-1.png";

export default function Contact() {
  return (
    <>
      <section className={style.contact} id="contact">
        <div>
          <dt className={style.heading}>Contact Us</dt>
          <h1>
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department!
          </h1>
          <img
            src={contactImage}
            alt="cheesecake"
            className={style.contactImg}
          />

          <div className={style.social}>
            <span>
              <img src={f} alt="cheesecake" />
            </span>
            <span>
              <img src={i} alt="cheesecake" />
            </span>
            <span>
              <img src={x} alt="cheesecake" />
            </span>
            <span>
              <img src={y} alt="cheesecake" />
            </span>
          </div>
        </div>
        <div>
          <form className={style.form}>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <textarea name="" id="" placeholder="Message"></textarea>
            </div>
            <div className={style.formAction}>
              <button>Contact us now</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
