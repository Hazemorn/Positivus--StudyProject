import s from './Header.module.scss'

const Header = () => {
    return ( 
    <header>
        {/* <div className="container"> */}
            <div className={s.header__wrapper}>
                <div className={s.header__logo}><img src='/logo.svg' alt='logo'/></div>
                <div className={s.header__nav}>
                    <nav>
                        <ul>
                            <li><a href='#'>About us</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Use Cases</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Blog</a></li>
                        </ul>
                    </nav>
                    <button className={s.header__button}>Request a quote</button>
                </div>
            </div>
        {/* </div> */}
    </header> 
    );
}
 
export default Header;