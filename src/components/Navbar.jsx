import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="flex justify-end items-center w-full h-16 px-6 text-white bg-black/90 fixed backdrop-blur-sm z-50">
      <ul className="hidden md:flex gap-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-300 hover:text-white transition-colors duration-300"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-300 hover:text-white md:hidden transition-colors duration-300"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setNav(false)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
