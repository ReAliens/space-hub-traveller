import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'Profile',
    },
  ];
  const location = useLocation();
  return (
    <nav className="flex sticky top-0 h-[80px] bg-white">
      <div> Space Traveller</div>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.id} className={`${location.pathname === link.path && 'text-blue-700'} text-black-700 hover:text-blue-300`}>
            <NavLink
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
