import { Link } from "react-router";
import { useNavigate } from "react-router";

import Logo from '../../assets/shared/desktop/logo.svg';
import NavList from "./NavList";



export function Navbar() {


    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <nav aria-label='site' className='nav'>
            <div className='logo__wrapper'>
                <Link to='/' className='logo-link'>
                    <img src={Logo} alt='welcome to coffee subscription' />
                </Link>
            </div>
            <NavList />

        </nav>
    )
}