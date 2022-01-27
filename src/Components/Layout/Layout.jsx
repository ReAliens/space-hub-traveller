import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Logo from '../../icons/planet.png';

const Layout = ({ children }) => {
  const [showHamburgerLinks, setShowHamburgerLinks] = useState(false);

  const showLinks = () => {
    setShowHamburgerLinks((prevState) => !prevState);
  };
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
  useEffect(() => {
    setShowHamburgerLinks(false);
  }, [location]);
  return (
    <>
      <nav className="hidden md:flex sticky top-0 h-[100px] justify-between bg-white px-10 items-center border-b-2 border-gray-300">
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
      <nav className="md:hidden sticky top-0 justify-between bg-white items-center border-b-2 border-gray-300 flex px-10 py-8 mx-auto">
        <div className="flex items-center gap-3">
          <img src={`${Logo}`} alt="Logo" className="h-[30px]" />
          <h1 className="hidden sm:block text-lg font-medium tracking-tighter">
            {`
              Space Traveler's Hub
            `}
          </h1>
        </div>
        <ul className={`${!showHamburgerLinks && 'hidden'} bg-white left-0 top-0 absolute w-[50vw] flex flex-col gap-32 px-10 py-8`}>
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
        <button type="button" className="flex md:hidden" onClick={showLinks}>
          <GiHamburgerMenu className={`${showHamburgerLinks && 'hidden'}`} />
          <GrClose className={`${!showHamburgerLinks && 'hidden'}`} />
        </button>
      </nav>
      <div className="mt-8 px-10 mb-24">{children}</div>
      <footer className="fixed bottom-0 bg-white w-full flex justify-between px-4">
        <div>
          implement by
          {' '}
          <a
            href="https://github.com/ReAliens"
            target="_blank"
            rel="noreferrer"
          >
            Ahmed Reda
          </a>
          {' '}
          and
          {' '}
          <a
            href="https://github.com/RayhanTabase"
            target="_blank"
            rel="noreferrer"
          >
            Salim Abdulai
          </a>
          {' '}
        </div>
        <a
          href="https://www.flaticon.com/free-icons/planet"
          target="_blank"
          title="planet icons"
          rel="noreferrer"
        >
          Planet icons created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
