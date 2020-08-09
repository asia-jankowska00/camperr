import React from "react";
import GoogleMapReact from "google-map-react";

import MapPin from "./MapPin";

const Map = (props) => {
  console.log(props.center);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GEO_CODE_API }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      <MapPin
        size={50}
        lat={props.center.lat}
        lng={props.center.lng}
        text="My Marker"
      />
    </GoogleMapReact>
  );
};

export default Map;
