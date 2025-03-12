import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Blood Donation Network</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/donors" className="text-white hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/request" className="text-white hover:underline">
            Log in
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;