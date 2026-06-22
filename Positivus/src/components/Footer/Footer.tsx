import Button from '../Button/Button';
import s from './Footer.module.scss';

import LogoWhite from '/logoWhite.svg';
import LinkedInImg from '../../assets/socials/linkedIn.svg';
import FacebookImg from '../../assets/socials/facebook.svg';
import TwitterImg from '../../assets/socials/twitter.svg';


const Footer = () => {
    return (
    <footer className={s.footer}>
            <div className={s.footer__wrapper}>
                <div className={s.footer__top}>
                <div className={s.footer__logo}><img src={LogoWhite} alt='logo'/></div>
                <div className={s.footer__nav}>
                    <nav>
                        <ul>
                            <li><a href='#!'>About us</a></li>
                            <li><a href='#!'>Services</a></li>
                            <li><a href='#!'>Use Cases</a></li>
                            <li><a href='#!'>Pricing</a></li>
                            <li><a href='#!'>Blog</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={s.footer__socials}>
                    <a href="https://linkedIn.com" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInImg} alt='linkedIn'/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookImg} alt='facebook'/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterImg} alt='twitter'/>
                    </a>
                </div>
                </div>
                <div  className={s.footer__middle}>
                    <div className={s.footer__contact}>
                        <h2>Contact us:</h2>
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>Address: 1234 Main St
                        Moonstone City, Stardust State 12345</p>
                    </div>
                    <div className={s.footer__subscribe}>
                        <input type='email' name='email' placeholder="Email" autoComplete="email" minLength={5} maxLength={50}/>
                        <Button title='Subscribe to news' bgColor='var(--accent)' color='var(--black)'/>
                    </div>
                </div>
                <hr className={s.footer__lineSeparator}/>
                <div className={s.footer__license}>
                    <p>© 2026 Positivus. All Rights Reserved.</p>
                    <a href='#!'>Privacy Policy</a>
                </div>
            </div>
    </footer> );
}
 
export default Footer;