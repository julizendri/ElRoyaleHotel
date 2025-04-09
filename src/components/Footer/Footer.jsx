import { NavLink, Link } from 'react-router-dom';
import { pages } from '../Shared/Pages';
import '../Shared/NavBarFooter.css';

export const Footer = () => {
    return (
        <div className="Footer">
            <div id='DivFooter1'>
                <Link to='/'>
                    Home
                </Link>
            </div>
            <div id='DivFooter2'>
                <ul>
                    {pages.map((page, index) => (
                        <li key={index}>
                            <NavLink to={page.path}>{page.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='DivFooter3'>
                <p>Subscribe for Offers</p>
                <input type="text" placeholder='email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};