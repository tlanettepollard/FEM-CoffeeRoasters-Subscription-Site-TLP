import { Link } from "react-router";
import { useEffect, useState } from 'react';

import Logo from '../../assets/shared/desktop/logo.svg';
import Hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import Close from '../../assets/shared/mobile/icon-close.svg'
import NavList from "./NavList";


export function Navbar() {
    const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 767);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const updateMobile = () => {
        setIsNotMobile(window.innerWidth > 767);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMobile);
        return () => window.removeEventListener('resize', updateMobile);
    });

    const isNavOpen = () => {
        setIsNavExpanded(true);
    };

    const isNavClosed = () => {
        setIsNavExpanded(false);
    };


    return (
        <>
            {isNotMobile ? (
                <nav aria-label='site' className='expanded-nav'>
                    <div className='logo__wrapper'>
                        <Link to='/' className='logo--link'>
                            <img src={Logo} alt="welcome to coffeeroasters" />
                        </Link>
                    </div>
                    <div className='expanded-menu'>
                        <NavList />
                    </div>
                </nav>
            ) : (
                <>
                    <nav aria-label='site' className='mobile-nav'>
                        <div className='logo__wrapper'>
                            <Link to='/' className='logo--link'>
                                <img src={Logo} alt="welcome to coffeeroasters" />
                            </Link>
                        </div>
                        {isNavExpanded ? (
                            <img src={Close} className='close-btn' alt="close menu" onClick={isNavClosed} />
                        ) : (
                            <img src={Hamburger} className='hamburger-btn' alt="open menu" onClick={isNavOpen} />
                        )}
                    </nav>
                    {isNavExpanded ? (
                        <div className='mobile-menu'>
                            <NavList />
                        </div>
                    ) : (
                        ""
                    )}
                </>
            )}
        </>
    )

}