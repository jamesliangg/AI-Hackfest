import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

//import mapStyles from '../../mapStyles';
import useStyles from "./styles.js";
import myImage from "./pointer.png";
import { LocationOnOutlined } from "@material-ui/icons";

const Map = ({ coords }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  
  let clinicsData = [
    {
      name: "North York General Hospital",
      lat: 43.7688,
      lng: -79.3627,
    },
    {
      name: "Toronto Western Hospital",
      lat: 43.6534,
      lng: -79.405,
    },
    {
      name: "Grand River Hospital",
      lat: 43.4562,
      lng: -80.512,
    },
  ];
  return (
    // Important! Always set the container height explicitly
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCmz0mcoR2H7Eo3t28YJJbORo4T3MBSeKs" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        // onChange={(e) => {
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        onChildClick={""}
      >
        {clinicsData.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.lat)}
            lng={Number(place.lng)}
            key={i}
          >
            <h3>{place.name}</h3>
            <LocationOnOutlinedIcon color="primary" fontSize="large" />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = (props) => {
  return <div className="SuperAwesomePin"></div>;
};

export default Map;
