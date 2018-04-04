import React from 'react'
import './header.scss'

const Header = () => (
  <div className="header" data-layout="row" data-layout-align="end center">
    <div className="header-links">
      <a href="/">Home</a>
      <a href="/photos/" className="last">Photos</a>
    </div>
  </div>
);

export default Header