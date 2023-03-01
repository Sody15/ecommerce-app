import { NavLink } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__logo'>EC</h1>
      <nav className='header__nav'>
        <ul>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <li>News</li>
          </NavLink>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <li>Clothes</li>
          </NavLink>
          <NavLink
            to='/accessories'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <li>Accessories</li>
          </NavLink>
          <NavLink
            to='/bands'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <li>Watch Bands</li>
          </NavLink>
          <NavLink
            to='/gifts'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <li>Gift Finder</li>
          </NavLink>
        </ul>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;
