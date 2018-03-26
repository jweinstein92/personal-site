import React from 'react'
import './home.scss'
import ImageSection from '../components/ImageSection'
import Menu from '../components/Menu'

class IndexPage extends React.Component {
  render() {
    return (
    <div className="home-page" data-flex data-layout="column">
      <div className="title-section" data-layout="column">
        <ImageSection sectionImage={this.props.data.sectionImage} />
        <div className="middle-section" data-flex data-layout="column" data-layout-align="center center">
          <span className="title-name">Josh Weinstein</span>
          <span className="title-description">Software | Travel | Photography</span>
        </div>
        <div className="menu-contsainer" data-layout="column" data-layout-align="end end">
          {/*<Menu />*/}
        </div>
      </div>
      <div className="section-container" data-layout="column" data-layout-align="start center">
        <div className="section profile" data-layout="column">
          <div className="section-header" data-layout="column" data-layout-align="center center">
            <span className="title">Profile</span>
            <span className="description">I am a software engineer with a passion for UI/UX</span>
          </div>
        </div>
      </div>
      <div className="section-container colored" data-layout="column" data-layout-align="start center">
        <div className="section experience" data-layout="column">
          <div className="section-header" data-layout="column" data-layout-align="center center">
            <span className="title">Experience</span>
            <span className="description"></span>
          </div>
        </div>
      </div>
      <div className="section-container" data-layout="column" data-layout-align="start center">
        <div className="section skills" data-layout="column">
          <div className="section-header" data-layout="column" data-layout-align="center center">
            <span className="title">Skills</span>
            <span className="description"></span>
          </div>
        </div>
      </div>
      <div className="section-container colored" data-layout="column" data-layout-align="start center">
        <div className="section travel" data-layout="column">
          <div className="section-header" data-layout="column" data-layout-align="center center">
            <span className="title">Travel</span>
            <span className="description"></span>
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
      sizes(maxWidth: 1680, maxHeight: 800, duotone: { highlight: "#e59732", shadow: "#11295f" },) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;