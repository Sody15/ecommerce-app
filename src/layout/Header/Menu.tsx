import './Menu.scss';

interface MenuItem {
  route: string;
  name: string;
}

const menuItems: MenuItem[] = [
  { name: 'News', route: '/news' },
  { name: 'Clothes', route: '/' },
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
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Menu;
