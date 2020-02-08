import React from 'react';
import './Header.css';

const logout = () => {
    window.location.href = '/';
}

const Header = ({ name,purpose }) => {
  return (
    <header className="header">
      <h3>Welcome, {name}!</h3>
      <h3>{purpose}, made easy.</h3>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </header>
  )
}

export default Header;
