import React from 'react'
import Link from 'gatsby-link'
import './header.scss'

const Header = () => (
  <div className="header" data-layout="row">
    <div className="header-name" data-flex>
      <span className="name">Josh Weinstein</span>
    </div>
    <div className="header-links">
      <Link to="/">Home</Link>
      <Link to="/portfolio/">Portfolio</Link>
      <Link to="/travel/">Travel</Link>
      <Link to="/contact/" className="last">Contact</Link>
    </div>
  </div>
);

export default Header