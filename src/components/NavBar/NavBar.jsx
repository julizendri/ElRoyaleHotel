import { NavLink, Link } from 'react-router-dom';
import { pages } from '../Shared/Pages';
import '../Shared/NavBarFooter.css';

export const NavBar = () => {
    return (
        <div className="NavBar">
            <Link to='/'>
                Home
            </Link>
            <div className='MenuNav'>
                {pages.map((page, index) => (
                    <NavLink key={index} to={page.path}>
                        {page.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};