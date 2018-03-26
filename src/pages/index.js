import React from 'react'
import './home.scss'
import ImageSection from '../components/ImageSection'

class IndexPage extends React.Component {
  render() {
    return (
    <div className="home-page" data-flex data-layout="column">
      <div className="title-section" data-flex data-layout="column" data-layout-align="center center">
        <span className="title-name">Josh Weinstein</span>
        <span className="title-description">Software | Travel | Photography</span>
        <ImageSection sectionImage={this.props.data.sectionImage} />
      </div>
    </div>
    );
  }
}
export default IndexPage

export const pageQuery = graphql`
  query ImageSectionQuery {
    sectionImage: imageSharp(id: { regex: "/background/" }) {
      sizes(maxWidth: 1680, maxHeight: 800, duotone: { highlight: "#ACACB4", shadow: "#141F42" },) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;