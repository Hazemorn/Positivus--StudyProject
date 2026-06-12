import s from './ContactUs.module.scss'

import contactUsImg from "../../assets/homepage/contactUs.svg";
import Button from '../Button/Button';

const ContactUs = () => {
    return ( <>
        <section className={s.contact_us}>
                <div className={s.contact_us__wrapper}>
                <div className={s.contact_us__top}>
                        <h2>Contact Us</h2>
                        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                </div>
                <div className={s.contact_us__body}>
                    <div className={s.contact_us__text}>
                        <div className={s.contact_us__type}>
                        <label>

                        </label>
                        <label>

                        </label>
                        </div>
                        <span></span>
                        <input/>
                        <input/>
                        <input/>
                        <Button title='Send Message' max_width='550px'/>
                    </div>

                    <div className={s.contact_us__img}>
                        <img src={contactUsImg} alt="contactUs__img"/>
                    </div>
                </div>
                </div>
            </section>
    </> );
}
 
export default ContactUs;