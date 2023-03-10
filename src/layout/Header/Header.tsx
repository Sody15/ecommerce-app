import { useState } from 'react';
import Cart from '../../components/Cart/Cart';
import './Header.scss';
import Menu from './Menu';

const Header = () => {
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);

  return (
    <header className='header'>
      <h1 className='header__logo'>EC</h1>
      <button
        className='header__menu-btn'
        onClick={() => setIsMenuOpenMobile((prevState) => !prevState)}
      >
        Menu
      </button>
      <div className='header__menu--mobile'>
        <Menu isOpen={isMenuOpenMobile} />
      </div>{' '}
      <div className='header__menu--desktop'>
        <Menu isOpen={true} />
      </div>
      <div className='header__cart-container'>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
