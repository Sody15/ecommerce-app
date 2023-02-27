import Cart from "../Cart/Cart";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header--logo">WD</div>
      <nav className="header--nav">
        <ul>
          <li>News</li>
          <li>Watches</li>
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
