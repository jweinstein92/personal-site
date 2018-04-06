import React from 'react'
import './photos-page.scss'

class PhotosPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const pageData = this.props.pathContext;
    let photos = [];
    if (this.props.data.photos != null) {
      this.props.data.photos.edges.map((node, key) => {
        photos.push(node);
      });
    }
    return (
      <div className="photos-page" data-flex data-layout="column" data-layout-align="start center">
        <div className="top" data-layout="column">
          <span className="place">{pageData.name}</span>
          <span className="num-photos">{photos.length} Photos</span>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query PhotoPage($photo_regex: String!) {
    photos: allImageSharp(filter: { id: { regex: $photo_regex } }) {
      edges {
        node {
          sizes(maxWidth: 800,) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;

export default PhotosPage;