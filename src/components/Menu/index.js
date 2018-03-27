import React from 'react'
import Scrollspy from 'react-scrollspy'
import './menu.scss'

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-container" data-layout="column">
        <Scrollspy items={ ['profile', 'experience', 'skills', 'travel'] } currentClassName="is-current">
          <li><a href="#profile"><i className="	fa fa-angle-down"></i></a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#travel">Travel</a></li>
        </Scrollspy>
      </div>
    );
  }
}

export default Menu;