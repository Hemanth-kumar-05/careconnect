import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname.toLowerCase() === '/home'

  const navLinks = [
    { id: 'home', text: 'Home'},
    { id: 'services', text: 'Services'},
    { id: 'about', text: 'About'},
    { id: 'doctors', text: 'Doctors'},
    { id: 'book', text: 'Book'},
    { id: 'review', text: 'Review'},
    { id: 'blogs', text: 'Blogs'},
  ]

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src="../../assets/careconnect-logo.svg" alt="careconnect-logo" />
      </Link>
      <nav className="navbar">
        {
          navLinks.map(({ id, text }) => (
            isHomePage ? (
            <a key={id} href={`#${id}`} className={id === 'home' ? 'disabled' : ''}>{text}</a>
          ) : (
            <Link key={id} to={`/${id}`} className={location.pathname.includes(`/${id}`) ? 'disabled' : ''}>{text}</Link>
          )
        ))}
      </nav>
      <div id="menu-btn" className="fas fa-bars"></div>
    </div>
  );
};

export default Header
