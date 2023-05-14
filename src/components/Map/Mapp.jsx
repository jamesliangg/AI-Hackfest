import React, {Component} from "react";
import {Map, GoogleApiWrapper, GoogleMap, withGoogleMap, Marker} from 'google-maps-react';
//import clinicsData from "../data/clinicsLocationData.json";

let clinicsData = [
    {   
        "name": "North York General Hospital",
        "lat": 43.7688,
        "lng": -79.3627
    },
    {
        "name": "Toronto Western Hospital",
        "lat": 43.6534,
        "lng": -79.405
    },
    {
        "name": "Grand River Hospital",
        "lat": 43.4562,
        "lng": -80.5120
    }
]

class MapContainer extends Component {
    render() {
        return  (
            <Map
                google = {this.props.google}
                style = {{width:"100%", height:"100%"}}
                zoom = {10}
                initialCenter = {
                    {
                        lat: 43.653225, 
                        lng: -79.383186
                    }
                }
            >
                <Marker position={{lat: 43.7688, lng: -79.3627}}/>
                <Marker position={{lat: 43.6534, lng: -79.4055}}/>
                <Marker position={{lat: 43.4562, lng: -80.5120}}/>
            </Map>   
            /* {clinicsData.map((clinic => (
                <Marker
                    key={clinic}
                    position={{
                        lat: latVal,
                        lng: lngVal
                    }}
                />
            )))} */
            //</GoogleMap> 
            )
        }
    //}
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBawCXKmLTbX91PJ9vye5lkbe1XMZ0gljY"
})(MapContainer)