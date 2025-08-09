import { Link } from "react-router";
import { useState } from 'react';

import Logo from '../../assets/shared/desktop/logo.svg';
import Hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import Close from '../../assets/shared/mobile/icon-close.svg'
import NavList from "./NavList";


export function Navbar() {


    return (
        <nav>
            <div className='logo__wrapper'>
                <Link to='/' className='logo--link'>
                    <img src={Logo} alt="welcome to coffee roasters" />
                </Link>
            </div>
            <div className='navbar__wrapper'>
                <NavList />
            </div>
        </nav>
    )
}