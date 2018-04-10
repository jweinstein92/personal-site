import React from 'react'
import Img from "gatsby-image"
import ImageGallery from 'react-image-gallery';

import './photos-page.scss'

class PhotosPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const pageData = this.props.pathContext;
    let photos = [];
    let numRows = 0;
    let rows = [];
    if (this.props.data != null && this.props.data.photos != null) {
      this.props.data.photos.edges.map((node, key) => {
        let foo = node.node;
        foo.originalSizes = foo.sizes;
        foo.original = foo.originalSizes.src;
        foo.thumbnail = foo.original;
        foo.srcSet = foo.originalSizes.srcSet;
        foo.sizes = foo.originalSizes.sizes;
        photos.push(foo);
      });
      {/*numRows = Math.ceil(photos.length / 2.0);*/}
      {/*for (let i = 0; i < numRows; i++) {*/}
        {/*let photoOne = photos[i * 2];*/}
        {/*let photoTwo = null;*/}
        {/*if (i*2 + 1 < photos.length) {*/}
          {/*photoTwo = photos[i * 2 + 1];*/}
        {/*}*/}
        {/*console.log(photoOne);*/}
        {/*let row = (*/}
          {/*<div className="photos-row" data-layout-gt-sm="row" data-layout-sm="column" key={i}>*/}
            {/*<div data-flex>*/}
              {/*<div className="photo">*/}
                {/*<Img*/}
                  {/*key={i * 2}*/}
      //             sizes={photoOne.sizes}
      //           />
      //         </div>
      //       </div>
      //       <div data-flex>
      //         { photoTwo != null &&
      //           <div className="photo">
      //             <Img
      //               key={i * 2 + 1}
      //               sizes={photoTwo.sizes}
      //             />
      //           </div>
      //         }
      //       </div>
      //     </div>
      //   );
      //   rows.push(row);
      // }
    }
    console.log(photos);

    return (
      <div className="photos-page" data-flex data-layout="column">
        <div className="top" data-layout="column">
          <span className="place">{pageData.name}</span>
          <span className="num-photos">{photos.length} Photos</span>
        </div>
        {/*<div className="photos-container" data-layout="column">*/}
          {/*{rows}*/}
        {/*</div>*/}
        <div data-layout="column" data-layout-align="center center">
          <div className="photos-container" data-layout="column">
            <ImageGallery items={photos} slideInterval={5000} />
          </div>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query PhotoPage($photo_regex: String!) {
    photos: allImageSharp(filter: { id: { regex: $photo_regex } }, sort: {fields: [id]}) {
      edges {
        node {
          id
          sizes(maxWidth: 1200,) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;

export default PhotosPage;