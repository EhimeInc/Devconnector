import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='navbar bg-dark'>
    <h1>
      <Link to='/'>
        {' '}
        <i className='fas fa-paper-plane' />
        DevConnector
      </Link>
    </h1>{' '}
    <ul>
      <li>
        {' '}
        {/* <Link to='/profiles'> Developers </Link> */}
        <a href='!#'> Developers </a>
      </li>
      <li>
        {' '}
        <Link to='/register'> Register </Link>
      </li>
      <li>
        {' '}
        <Link to='/login'> Login </Link>
      </li>
    </ul>{' '}
  </nav>
);

export default Navbar;
