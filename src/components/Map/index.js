import React from 'react'
import { compose, withProps, withHandlers } from "recompose"
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
        console.log(marker);
      },
    }),
    withScriptjs,
    withGoogleMap,
)((props) =>
    <GoogleMap
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
            onClick={props.onMarkerClick.bind(this, marker)}
          >
          </Marker>
        )
      })}
    </GoogleMap>
);

export default MyMapComponent;