import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

//import Map from './components/Map/Map';
import {Map, GoogleApiWrapper, GoogleMap, withGoogleMap, Marker} from 'google-maps-react';
import Mapp from './components/Map/Mapp';

function App() {
  return (
    <div>
      {/* <CssBaseline /> */}
      <header>header</header>
      {/* <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <div>List</div>
        </Grid>
        <Grid item xs={12} md={4}>
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
        </Grid>
      </Grid> */}
      <Mapp/>
    </div>
  );
}

export default App;
