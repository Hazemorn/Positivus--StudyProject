import s from './Header.module.scss'
import React, {useEffect} from "react";
import Logo from '/logo.svg';

interface HeaderProps {
    onNavigate: (id: string) => void;
  }

const Header:React.FC<HeaderProps> = ( {onNavigate} ) => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    useEffect(()=>{
        setIsMenuOpen(false)
    },[location.pathname])
    return ( 
    <header id='header'>
        {/* <div className="container"> */}
            <div className={s.header__wrapper}>
                <div className={s.header__logo}><img src={Logo} alt='logo'/></div>
                <div className={s.header__nav}>
                    <nav>
                        <ul>
                            <li><a href='#about'>About us</a></li>
                            <li><a href='#services'>Services</a></li>
                            <li><a href='#cases'>Use Cases</a></li>
                            <li><a href='#contactUs'>Pricing</a></li>
                            <li><a href='#contactUs'>Blog</a></li>
                        </ul>
                    </nav>
                    <button className={s.header__button} onClick={() => onNavigate('contactUs')}>Request a quote</button>
                </div>
            </div>

            <div className={s.mobile}>
                <div>

                </div>
            </div>
        {/* </div> */}
    </header> 
    );
}
 
export default Header;