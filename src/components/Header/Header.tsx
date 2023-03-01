import Cart from '../Cart/Cart';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__logo'>EC</h1>
      <nav className='header__nav'>
        <ul>
          <li>News</li>
          <li>Clothes</li>
          <li>Accessories</li>
          <li>Watch Bands</li>
          <li>Gift Finder</li>
        </ul>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;
