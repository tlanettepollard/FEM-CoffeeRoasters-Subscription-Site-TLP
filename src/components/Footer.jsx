import { Link } from "react-router";
import Facebook from '../assets/shared/desktop/icon-facebook.svg';
import Twitter from '../assets/shared/desktop/icon-twitter.svg';
import Instagram from '../assets/shared/desktop/icon-instagram.svg';
import FooterLogo from '../assets/shared/desktop/footerlogo.svg';


export function Footer() {

    return (
        <footer>
            <div className="footer__container container">
                <div className="footer__mainmenu">
                    {" "}
                    <Link to='/'>
                        <img className='footer__logo' src={FooterLogo} alt="welcome to coffeeroasters" />
                    </Link>
                    <ul className="footer__menu">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/subscribe'>Create Your Plan</Link></li>
                    </ul>
                </div>

                <ul className="footer__socialmenu">
                    <li>
                        <img className='social-icon' src={Facebook} alt="facebook icon" />
                    </li>
                    <li>
                        <img className='social-icon' src={Twitter} alt="Twitter icon" />
                    </li>
                    <li>
                        <img className='social-icon' src={Instagram} alt="instagram icon" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}