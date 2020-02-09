import React from 'react';
import './Header.css';
import logo from '../assets/DarkLogo.png'

const logout = () => {
    window.location.href = '/';
}

const Header = ({ name,purpose }) => {
  return (
    <header className="header">
      <img className='blucifer-logo' src={logo} alt='logo'/>
      <h3>Welcome, {name}!</h3>
      <h3>{purpose}, made easy.</h3>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </header>
  )
}

export default Header;
