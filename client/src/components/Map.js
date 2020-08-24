import React from "react";
import GoogleMapReact from "google-map-react";

import dotenv from "dotenv";

import MapPin from "./MapPin";

dotenv.config({ path: "../../.env" });

const Map = (props) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GEO_CODE_API }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      <MapPin
        size={50}
        centered={true}
        lat={props.center.lat}
        lng={props.center.lng}
        text="My Marker"
      />
    </GoogleMapReact>
  );
};

export default Map;
