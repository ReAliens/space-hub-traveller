import { NavLink } from 'react-router-dom';

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
  return (
    <nav className="flex fixed top-0">
      <div> Space Traveller</div>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.id} className="text-black-700 hover:text-blue-300">
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
