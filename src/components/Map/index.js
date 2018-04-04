import React from 'react'
import { compose, withProps, withHandlers, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: '100%'}} />,
        containerElement: <div style={{height: '400px'}}/>,
        mapElement: <div style={{height: '100%'}}/>
    }),
    withHandlers({
      onMarkerClick: () => (marker) => {
        window.location = '/photos/' + marker.photo_regex;
      },
    }),
    lifecycle({
      componentWillMount() {

        this.setState({
          zoomToMarkers: map => {
            const bounds = new window.google.maps.LatLngBounds();
            map.props.children.forEach((child) => {
              if (child.type === Marker) {
                bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
              }
            });
            map.fitBounds(bounds);
          }
        })
      },
    }),
    withScriptjs,
    withGoogleMap,
)((props) =>
    <GoogleMap
        ref={props.zoomToMarkers}
        defaultZoom={3}
        defaultCenter={{lat: 55.6761, lng: 12.5683}}
    >
      {props.markers.map(marker => {
        return (
          <Marker
            key={marker.name}
            customInfo={marker}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.name}
            icon={(marker.has_pictures) ? "http://maps.google.com/mapfiles/ms/micons/orange-dot.png" : "http://maps.google.com/mapfiles/ms/micons/orange.png"}
            onClick={(marker.has_pictures) ? props.onMarkerClick.bind(this, marker) : null}
          >
          </Marker>
        )
      })}
    </GoogleMap>
);

export default MyMapComponent;