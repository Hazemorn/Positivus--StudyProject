import s from "./ContactUs.module.scss";

import contactUsImg from "../../assets/homepage/contactUs.svg";
import Button from "../Button/Button";

const ContactUs = () => {
  return (
    <>
      <section className={s.contact_us}>
          <div className={s.contact_us__body}>
            <div className={s.contact_us__text}>
              <div className={s.contact_us__type}>
                <label>
                  <input
                    type="radio"
                    name="contactType"
                    value="sayHi"
                    defaultChecked
                  />
                  <span> Say Hi</span>
                </label>
                <label>
                  <input type="radio" name="contactType" value="quote" />
                  <span> Get a Quote</span>
                </label>
              </div>
              <div className={s.contact_us__data}>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                  />
                </label>
                <label>
                  <span>Email*</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="on"
                    required
                  />
                </label>
                <label>
                  <span>Message*</span>
                  <textarea
                    className={s.contact_us__textarea_message}
                    name="message"
                    rows={6}
                    placeholder="Message"
                    maxLength={250}
                    required
                  />
                </label>
              </div>
              <Button title="Send Message" max_width="550px" />
            </div>

            <div className={s.contact_us__img}>
              <img src={contactUsImg} alt="contactUs__img" loading='lazy' />
            </div>
          </div>
      </section>
    </>
  );
};

export default ContactUs;
