import React from 'react';
import './Header.css';
import logo from '../assets/DarkLogo.png'
import { Link } from 'react-router-dom';

const logout = () => {
    window.location.href = '/';
}

const Header = ({ name, purpose, totalFavorites }) => {
  return (
    <header className="header">
      <div className='welcome-holder'>
        <img className='blucifer-logo' src={logo} alt='logo'/>
        <h3 className='user-welcome'>Welcome, {name}!</h3>
      </div>
      <Link to='/nav/areas' className="logout-btn">{purpose}, made easy.</Link>
      <Link to='/nav/favorites' className="logout-btn">Favorites({totalFavorites})</Link>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </header>
  )
}

export default Header;
