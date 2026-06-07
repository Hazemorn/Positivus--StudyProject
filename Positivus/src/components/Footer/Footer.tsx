import s from './Footer.module.scss';

const Footer = () => {
    return (
    <footer>
        {/* <div className="container"> */}
            <div className={s.footer__wrapper}>
                <div className={s.footer__logo}><img src='/logo.svg'/></div>
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
                        <img src='/socials/linkedIn.svg' alt='linkedIn'/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src='/socials/facebook.svg' alt='facebook'/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src='/socials/twitter.svg' alt='twitter'/>
                    </a>
                </div>
                <div className={s.footer__license}>
                    © 2026 Positivus. All Rights Reserved.
                </div>
            </div>
        {/* </div> */}
    </footer> );
}
 
export default Footer;