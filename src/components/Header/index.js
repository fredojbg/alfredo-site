import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__menu'>
        <ul className='header__logo'></ul>
        <ul className='header__links'>
          <li>
            <a href className='header__link'>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href className='header__link'>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href className='header__link'>
              <span>Projects</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
