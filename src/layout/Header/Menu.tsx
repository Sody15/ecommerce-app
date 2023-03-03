import { NavLink } from 'react-router-dom';
import './Menu.scss';

interface MenuItem {
  route: string;
  name: string;
}

const menuItems: MenuItem[] = [
  { name: 'News', route: '/' },
  { name: 'Clothes', route: 'clothes' },
  { name: 'Accessories', route: 'accessories' },
  { name: 'Watch Bands', route: 'bands' },
  { name: 'Gift Finder', route: 'gifts' },
];

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <nav className='header__nav'>
      {isOpen && (
        <ul>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.route}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <li>{item.name}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Menu;
