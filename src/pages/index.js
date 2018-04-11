import React from 'react'
import Img from 'react-image'
import ImageSection from '../components/ImageSection'
import MyMapComponent from '../components/Map'
import Scrollspy from 'react-scrollspy'

import './home.scss'
import profilePhoto from '../img/profile.png'
import beerPhoto from '../img/beer.jpg'
import fftPhoto from '../img/fft.jpg'

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
                  <span className="answer"><a href="https://github.com/jweinstein92" target="_blank" title="Github"><i className="fa fa-github-square" /></a> <a href="https://www.linkedin.com/in/joshweinstein92/" target="_blank" title="LinkedIn"><i className="fa fa-linkedin-square" /></a></span>
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
                    <a href="https://booksmart.it" target="_blank" title="Booksmart Touring" className="link"><i className="fa fa-link" />Booksmart Touring</a>
                  </div>
                </div>
                <div className="job" data-layout-gt-sm="row" data-layout-sm="column">
                  <div className="general" data-flex="33" data-layout="column">
                    <span className="company">Oracle</span>
                    <span className="date">April to August, 2014, April to September 2015</span>
                  </div>
                  <div className="details" data-flex="66" data-layout="column">
                    <span className="position">Applications Engineer</span>
                    <div className="description">
                      While working for Oracle I worked with various technologies ranging from JavaScript, Git, JQuery,
                      HTML, CSS, Handlebars, and an internal Javascript component library. I was tasked with developing
                      new UI features to enhance user experience on their project managment suite.
                    </div>
                    <a href="https://www.oracle.com/applications/primavera/products/project-portfolio-management/index.html" target="_blank" title="Oracle Primavera" className="link"><i className="fa fa-link" />Oracle Primavera P6</a>
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
                    <a href="https://ias.edu" target="_blank" title="Institute for Advanced Study" className="link"><i className="fa fa-link" />Institute for Advanced Study</a>
                    <a href="https://video.ias.edu" target="_blank" title="Institute for Advanced Study Video" className="link"><i className="fa fa-link" />Institute for Advanced Study Video</a>
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
                    <a href="https://drexel.edu" target="_blank" title="Drexel University" className="link"><i className="fa fa-link" />Drexel University</a>
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
            <div className="project-details" data-flex data-layout-gt-sm="row" data-layout-sm="column">
              <div className="project" data-layout="column" data-layout-align="center center">
                <div className="image-container">
                  <Img src={beerPhoto} />
                  <div className="overlay" data-layout="column" data-layout-align="start start">
                    <span className="title">Predictive Beer Analytics</span>
                    <div className="description" data-flex>
                      A project that aims to gather, process, and present beer data to determine where in the world
                      different beers will be rated highest. <br /> <br />
                      Uses a combination of data mining, natural language processing, image color analysis, and web
                      development (all in Python) to come to the conclusions presented in the report.
                    </div>
                    <a href="https://github.com/jweinstein92/Predictive_Beer_Analytics/" target="_blank" title="PBA" className="link"><i className="fa fa-link" />Github</a>
                    <a href="https://github.com/jweinstein92/Predictive_Beer_Analytics/blob/master/docs/PBA_Report.pdf" target="_blank" title="PBA Report" className="link"><i className="fa fa-link" />Report</a>
                  </div>
                </div>
              </div>
              <div className="project" data-layout="column" data-layout-align="center center">
                <div className="image-container">
                  <Img src={fftPhoto} />
                  <div className="overlay" data-layout="column" data-layout-align="start start">
                    <span className="title">Audio Removal</span>
                    <div className="description" data-flex>
                      A project that aims to remove chunks of an audio file with two provided WAV files, one for the
                      original signal and one for the sample. <br /> <br />
                      Using C and the Fast Fourier Transform, we were able to determine the instances of a provided
                      sample audio file in another provided audio file and remove the sample from the original. This can
                      be used to remove the opening theme song of a podcast for example.
                    </div>
                    <a href="https://github.com/jweinstein92/Audio-Removal-Using-FFT-" target="_blank" title="Audio Removal" className="link"><i className="fa fa-link" />Github</a>
                  </div>
                </div>
              </div>
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
              <span className="travel-instructions" data-hide-xs>Look where I've been! Click on pins with dots to see some of the pictures I've taken or visit the <a href="/photos">photos page</a> to see them all!</span>
              <div className="map-container" data-hide-xs>
                <MyMapComponent isMarkerShown markers={this.state.markers}/>
              </div>
              <span className="travel-instructions" data-hide-gt-xs>I've been to many places! Visit the <a href="/photos">photos page</a> to see photos from the countries I've been to.</span>
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