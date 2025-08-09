import NavItem from "./NavItem";

const NavList = ({ click }) => {

    return (
        <div className='nav__menu'>
            <ul className={`nav__list`} role='menubar' aria-label='main menu'>
                <NavItem name='Home' link='/' click={click} />
                <NavItem name='About Us' link='/about' click={click} />
                <NavItem name='Create Your Plan' link='/subscribe' click={click} />
            </ul>
        </div>
    )
}

export default NavList