import React from 'react';
import '../styles/Header-Styles.css';

const Header = () => {
  return (
    <>
      <div className="navbar">
          <h1 className="title">Moviesta</h1>
          <button className="search"><i class="fas fa-search"></i></button>
      </div>
    </>
  )
}

export default Header;
