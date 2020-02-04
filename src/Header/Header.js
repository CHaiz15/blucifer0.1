import React from 'react';
import './Header.css';

const Header = ({ name,purpose }) => {
  return (
    <header className="header">
      <h3>Welcome, {name}!</h3>
      <h3>{purpose}, made easy.</h3>
      <button>Logout</button>
    </header>
  )
}

export default Header;
