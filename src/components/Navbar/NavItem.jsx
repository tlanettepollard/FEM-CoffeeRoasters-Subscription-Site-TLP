//import { Link } from "react-router";
import { NavLink } from "react-router";

const NavItem = (props) => {
    return (
        <li className='nav__item'>
            <NavLink to={props.link}
                role='menuitem'
                onClick={props.click}
                className='anchor nav__item--btn nav-font-mobile'>
                {props.name}
            </NavLink>

        </li>
    )
}

export default NavItem