import React from 'react'
import ImageGallery from 'react-image-gallery'

import './photos.scss'

class Photos extends React.Component {
  constructor(props) {
    super(props);

    let photos = [];
    let countryMap = {};
    if (props.data != null && props.data.photos != null) {
      props.data.photos.edges.map((node, index) => {
        let foo = node.node;
        foo.originalSizes = foo.sizes;
        foo.original = foo.originalSizes.src;
        foo.thumbnail = foo.original;
        foo.srcSet = foo.originalSizes.srcSet;
        foo.sizes = foo.originalSizes.sizes;
        let regex = new RegExp('static\/(.*)_', 'i');
        let country = foo.original.match(regex)[1];
        foo.description = country.charAt(0).toUpperCase() + country.slice(1);
        if (countryMap[country] == null) {
          countryMap[country] = [index];
        } else {
          countryMap[country].push(index);
        }
        photos.push(foo);
      });
    }
    this.state = {
      photos: photos,
      countryMap: countryMap,
      currentIndex: 0,
      menuOpen: false,
    };
    // TODO: Add a clickable menu on left to scroll to a specific index of a country
    this.slideToCountry = this.slideToCountry.bind(this);
    this.changedImage = this.changedImage.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  slideToCountry(country) {
    if (country && this._imageGallery) {
      let index = this.state.countryMap[country][0];
      this._imageGallery.slideToIndex(index);
      this.setState({currentIndex: index});
    }
  }
  changedImage(index) {
    this.setState({currentIndex: index});
  }
  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen});
  }
  render() {
    return (
      <div className="photos-page" data-flex data-layout="column">
        <div className="content-container" data-layout-gt-md="row" data-layout-md="column" data-layout-align-md="center center">
          <div className="country-filter" data-layout="column">
            <div className="menu-bars" data-layout="column" data-layout-align="center end">
              <button onClick={this.toggleMenu}><i className="fa fa-bars" /></button>
            </div>
            <ul className={"navigation-container " + (this.state.menuOpen ? 'open' : 'closed')}>
              {Object.keys(this.state.countryMap).map(country => {
                return (
                  <li key={country} onClick={this.slideToCountry.bind(this, country)} className={"navigation-link " + (this.state.countryMap[country].includes(this.state.currentIndex) ? 'is-current' : '')}><a>{country}</a></li>
                )
              })}
            </ul>
          </div>
          <div data-layout="column">
            <div className="photos-container">
              <ImageGallery ref={i => this._imageGallery = i} items={this.state.photos} slideInterval={5000} onSlide={this.changedImage} />
            </div>
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