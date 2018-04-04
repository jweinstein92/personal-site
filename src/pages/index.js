import React from 'react'
import Img from 'react-image'
import ImageSection from '../components/ImageSection'
import MyMapComponent from '../components/Map'
import Scrollspy from 'react-scrollspy'

import './home.scss'
import profilePhoto from '../img/profile.png'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    let markers = [];
    this.props.data.allPlacesJson.edges.map((node, key) => {
      markers.push(node.node);
    });
    this.state = {
      menuOpen: false,
      markers: markers
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
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
          <Scrollspy items={ ['profile', 'experience', 'projects', 'travel'] } currentClassName="is-current" className={this.state.menuOpen ? 'open' : 'closed'}>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
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
            <div className="experience-details" data-flex data-layout="column">
              <div className="professional" data-layout="column">
                <span className="title">Professional</span>
                <div className="job" data-layout-gt-sm="row" data-layout-sm="column">
                  <div className="general" data-flex="33" data-layout="column">
                    <span className="company">Booksmart Touring</span>
                    <span className="date">June 2015 - Present</span>
                  </div>
                  <div className="details" data-flex="66" data-layout="column">
                    <span className="position">Co-founder, Lead Engineer</span>
                    <div className="description">
                      I co-founded a company with two friends based around helping manage the hectic life on the road of
                      touring musicians. Starting from the ground up, I helped determine the main technologies we would
                      use, including <b>Django Rest Framework</b> for the RESTful API and <b>AngularJS</b> with the web
                      platform. In the almost three years with Booksmart, I have worked on database and API architecture,
                      database modeling, performance analysis, feature design, translating requirements specifications
                      into technical specifications, and managing a team of part time developers.
                    </div>
                    <a href="https://booksmart.it" target="_blank" title="Booksmart Touring" className="link"><i className="fa fa-link" />https://booksmart.it</a>
                  </div>
                </div>
                <div className="job" data-layout-gt-sm="row" data-layout-sm="column">
                  <div className="general" data-flex="33" data-layout="column">
                    <span className="company">Oracle Primavera</span>
                    <span className="date">April to August, 2014, April to September 2015</span>
                  </div>
                  <div className="details" data-flex="66" data-layout="column">
                    <span className="position">Applications Engineer</span>
                    <div className="description">
                      While working for Oracle Primavera, a subsidiary of Oracle, I worked
                      with various technologies ranging from JavaScript, Git, JQuery, HTML, CSS, Handlebars, and an
                      internal Javascript component library. I was tasked with developing new UI features to enhance
                      user experience on their project managment suite.
                    </div>
                  </div>
                </div>
                <div className="job" data-layout-gt-sm="row" data-layout-sm="column">
                  <div className="general" data-flex="33" data-layout="column">
                    <span className="company">Institute for Advanced Study</span>
                    <span className="date">April 2013 to April 2014</span>
                  </div>
                  <div className="details" data-flex="66" data-layout="column">
                    <span className="position">Junior Web Developer</span>
                    <div className="description">
                      Utilizing the content management system <b>Drupal</b>, I helped build multiple web applications
                      during this position. Specifically, I helped build a new video streaming website which included a
                      quick page creation tool, automatic poster image creation using ffmpeg, and embedded videos using
                      &lt;iframe&gt;. I also upgraded their time tracking web application to be more user friendly.
                    </div>
                  </div>
                </div>
              </div>
              <div className="education" data-layout="column">
                <span className="title">Education</span>
                <div className="school" data-layout-gt-sm="row" data-layout-sm="column">
                  <div className="general" data-flex="33" data-layout="column">
                    <span className="company">Drexel University</span>
                    <span className="date">September 2011 to June 2016</span>
                  </div>
                  <div className="details" data-flex="66" data-layout="column">
                    <span className="position">Bachelor of Science in Computer Science</span>
                    <div className="description">
                      I graduated from Drexel University in 2016 with a degree in computer science with a concentration
                      in <b>Human Computer Interaction</b> and <b>Artificial Intelligence</b>. While there, I took many
                      classes, some interesting, some not, explored Philadelphia, made a great group of friends, and was
                      president of the school's chapter of <b>Engineers Without Borders</b>. Our project was to build
                      water filtration devices in the small village of Miramar in El Salvador. As president, I was in
                      charge of meetings, managing the various teams we had, and talking with the university and advisors.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="section-container" data-layout="column" data-layout-align="start center">
          <div className="section projects" data-flex data-layout="column">
            <div className="section-header" data-layout="column" data-layout-align="center center">
              <span className="title">Projects</span>
              <span className="description">I have played with many technologies and love to learn more</span>
            </div>
            <div class="project-details" data-flex data-layout="column">

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
              <span className="travel-instructions">Look where I've been! Click on pins with dots to see some of the pictures I've taken or visit the <a href="/photos">photos page</a> to see the different places.</span>
              <div className="map-container">
                <MyMapComponent isMarkerShown markers={this.state.markers}/>
              </div>
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
  query ImageQuery {
    sectionImage: imageSharp(id: { regex: "/background/" }) {
      sizes(maxWidth: 1680, maxHeight: 800, duotone: { highlight: "#e59732", shadow: "#11295e" },) {
        ...GatsbyImageSharpSizes
      }
    }
    icelandPhoto: imageSharp(id: { regex: "/iceland/" }) {
      sizes(maxWidth: 800,) {
        ...GatsbyImageSharpSizes
      }
    }
    allPlacesJson {
      edges {
        node {
          id
          name
          lat
          lng
          has_pictures
          photo_regex
        }
      }
    }
  }
`;