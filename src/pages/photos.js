import React from 'react'
import ImageGallery from 'react-image-gallery';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    let photos = [];
    if (props.data != null && props.data.photos != null) {
      props.data.photos.edges.map((node, key) => {
        let foo = node.node;
        foo.originalSizes = foo.sizes;
        foo.original = foo.originalSizes.src;
        foo.thumbnail = foo.original;
        foo.srcSet = foo.originalSizes.srcSet;
        foo.sizes = foo.originalSizes.sizes;
        let regex = new RegExp('static\/(.*)_', 'i');
        let country = foo.original.match(regex)[1];
        foo.description = country.charAt(0).toUpperCase() + country.slice(1);
        console.log(foo.country);
        photos.push(foo);
      });
    }
    this.state = {
      photos: photos
    };
    // TODO: Add a clickable menu on left to scroll to a specific index of a country
  }
  render() {
    return (
      <div className="photos-page" data-flex data-layout="column">
        <div className="top" data-layout="column"></div>
        <div data-layout="column" data-layout-align="center center">
          <div className="photos-container" data-layout="column">
            <ImageGallery items={this.state.photos} slideInterval={5000} />
          </div>
        </div>
      </div>
    );
  }
}
export default Photos

export const pageQuery = graphql`
  query Photos { 
    photos: allImageSharp(filter: { id: { regex: "/img\/photos/" } }, sort: {fields: [id]}) {
      edges {
        node {
          sizes(maxWidth: 1200,) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;