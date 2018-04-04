import React from 'react';

class PhotosPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const pageData = this.props.pathContext;
    return (
      <div>{pageData.name}</div>
    )
  }
}

export const pageQuery = graphql`
  query PhotoPage($photo_regex: String!) {
    photos: imageSharp(id: { regex: $photo_regex }) {
      sizes(maxWidth: 800,) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default PhotosPage;