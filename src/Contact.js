import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import pin from "./pin.svg";

const Contact = () => {
  const [location, setLocation] = useState("");
  const changeZoom = () => {
    setLocation(
      "West Agile Labs - Custom Software Design & Development Company,091608 52665"
    );
  };
  const defaultProps = {
    center: {
      lat: 17.453911083520403,
      lng: 78.37020776931183,
    },
    zoom: 11,
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  const markerStyle = {
    width: "40px",
    height: "40px",
  };
  return (
    <div>
      <div className="home">
        <h1>Contact Us On</h1>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
      <div style={{ height: "50vh", width: "50%" }} className="company">
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <img
            zoom={66}
            onClick={changeZoom}
            style={markerStyle}
            src={pin}
            alt="pin"
            lat={17.453911083520403}
            lng={78.37020776931183}
          />
          <p
            style={{
              color: "violet",
              fontSize: "18px",
              textShadow: "1px 1px black",
            }}
            lat={17.453911083520403}
            lng={78.37020776931183}
          >
            <b>WestAgile Labs</b>
          </p>
        </GoogleMapReact>
        <p>
          <b className="loc">{location}</b>
        </p>
      </div>
    </div>
  );
};

export default Contact;
