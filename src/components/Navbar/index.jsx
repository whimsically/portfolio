import { NavLink } from "react-router-dom";
import { routes } from '../../routes';

const Navbar = () => {
    return(
        <nav>
        {routes.map((route) => (
        <NavLink
            key={route.path}
            as={NavLink}
            to={route.path}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            end
        >
            {route.name}
        </NavLink>
        ))}
        </nav>
    )
}

export default Navbar