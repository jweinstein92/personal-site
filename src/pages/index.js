import React from 'react'
import Img from 'react-image'
import ImageSection from '../components/ImageSection'
import Scrollspy from 'react-scrollspy'

import './home.scss'
import profilePhoto from '../img/profile.png'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    console.log(this.state);
    this.setState({menuOpen: !this.state.menuOpen});
  }
  render() {
    return (
    <div className="home-page" data-flex data-layout="column">
      <div className="title-section" data-layout="column">
        <ImageSection sectionImage={this.props.data.sectionImage} />
        <div className="middle-section" data-flex data-layout="column" data-layout-align="center center">
          <span className="title-name">Josh Weinstein</span>
          <span className="title-description">Software | Web | Travel</span>
        </div>
        <div className="dropdown-menu" data-layout="column" data-layout-align="end end">
          <Scrollspy items={ ['profile'] }>
            <li><a href="#profile"><i className="fa fa-angle-down bounce" /></a></li>
          </Scrollspy>
        </div>
      </div>
      <div className="sections" data-layout="column">
        <div className="menu-container" data-layout="column" data-layout-align="end end">
          <div className="menu-bars" data-layout="column" data-layout-align="center end">
            <button onClick={this.toggleMenu}><i className="fa fa-bars" /></button>
          </div>
          <Scrollspy items={ ['profile', 'experience', 'skills', 'travel'] } currentClassName="is-current" offset="1" className={this.state.menuOpen ? 'open' : 'closed'}>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#travel">Travel</a></li>
          </Scrollspy>
        </div>
        <div id="profile" className="section-container" data-layout="column" data-layout-align="start center">
          <div className="section profile" data-flex data-layout="column">
            <div className="section-header" data-layout="column" data-layout-align="center center">
              <span className="title">Profile</span>
              <span className="description">I am a software engineer with a passion for UI/UX</span>
            </div>
            <div className="profile-details-container" data-flex data-layout="column" data-layout-align="center center">
              <div className="profile-details" data-flex data-layout-gt-sm="row" data-layout-sm="column" data-layout-align="center start">
                <div className="about" data-flex data-layout="column">
                  <span className="about-me">Hey there!</span>
                  <div className="description">
                    I am a software engineer based out of Philadelphia. Professionally, I have worked on some different
                    web applications as well as built a revenue generating company with two friends. <br/><br/>
                    I am passionate about user interfaces, learning new technologies, travel, photography, food, and beer.
                  </div>
                </div>
                <div className="profile-photo" data-flex>
                  <Img src={profilePhoto} />
                </div>
                <div className="contact" data-flex data-layout="column">
                  <span className="details">Details</span>
                  <span className="label">Name:</span>
                  <span className="answer">Josh Weinstein</span>
                  <span className="label">Age:</span>
                  <span className="answer">25</span>
                  <span className="label">Location:</span>
                  <span className="answer">Philadelphia, PA</span>
                  <span className="label">Profiles:</span>
                  <span className="answer"><a href="https://www.linkedin.com/in/joshweinstein92/" target="_blank" title="LinkedIn"><i className="fa fa-linkedin-square" /></a> <a href="https://github.com/jweinstein92" target="_blank" title="Github"><i className="fa fa-github-square" /></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="experience" className="section-container colored" data-layout="column" data-layout-align="start center">
          <div className="section experience" data-flex data-layout="column">
            <div className="section-header" data-layout="column" data-layout-align="center center">
              <span className="title">Experience</span>
              <span className="description">I have worked with corporations and led a startup</span>
            </div>
            <div class="experience-details" data-flex data-layout="column">

            </div>
          </div>
        </div>
        <div id="skills" className="section-container" data-layout="column" data-layout-align="start center">
          <div className="section skills" data-flex data-layout="column">
            <div className="section-header" data-layout="column" data-layout-align="center center">
              <span className="title">Skills</span>
              <span className="description">I have played with many technologies and love to learn more</span>
            </div>
            <div class="skills-details" data-flex data-layout="column">

            </div>
          </div>
        </div>
        <div id="travel" className="section-container colored" data-layout="column" data-layout-align="start center">
          <div className="section travel" data-flex data-layout="column">
            <div className="section-header" data-layout="column" data-layout-align="center center">
              <span className="title">Travel</span>
              <span className="description">I have explored parts of the world and am aching to continue</span>
            </div>
            <div class="travel-details" data-flex data-layout="column">

            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default IndexPage

export const pageQuery = graphql`
  query ImageSectionQuery {
    sectionImage: imageSharp(id: { regex: "/background/" }) {
      sizes(maxWidth: 1680, maxHeight: 800, duotone: { highlight: "#e59732", shadow: "#11295e" },) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;