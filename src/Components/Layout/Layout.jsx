import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../icons/planet.png';

const Layout = ({ children }) => {
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
    <>
      <nav className="flex sticky top-0 h-[100px] justify-between px-10 items-center border-b-2 border-gray-300">
        <div className="flex items-center gap-3">
          <img src={`${Logo}`} alt="Logo" className="h-[50px]" />
          <h1 className="text-4xl font-medium tracking-tighter">
            {`
              Space Traveler's Hub
            `}
          </h1>
        </div>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li
              key={link.id}
              className={`${
                location.pathname === link.path && 'text-blue-700 underline'
              } text-black-700 hover:text-blue-300`}
            >
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 px-10">
        {children}
      </div>
      <footer className="fixed bottom-0 bg-white w-full">
        test dfjnfskjnfsjkn
        <a href="https://www.flaticon.com/free-icons/planet" title="planet icons">Planet icons created by Freepik - Flaticon</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
