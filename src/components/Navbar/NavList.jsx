import NavItem from "./NavItem";

const NavList = () => {
    return (
        <div className='nav__menu'>
            <ul className='nav__menu--list' role='menubar' aria-label='main menu'>
                <NavItem className='nav-item' name='Home' link='/' />
                <NavItem className='nav-item' name='About Us' link='/about' />
                <NavItem className='nav-item' name='Create Your Plan' link='/subscribe' />
            </ul>
        </div>
    )
}

export default NavList