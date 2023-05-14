
import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from "@material-ui/core";

//import Map from './components/Map/Map';
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";

function Mapping() {
  const [autocomplete, setAutocomplete] = useState(null);
  const [coords, setCoords] = useState({ lat: 43.7688, lng: -79.3627 });
 
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  console.log(autocomplete);
  console.log(coords);


  return (
    <div>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: "100%" }}>

        <Grid item xs={12} md={4}>
          <div>List</div>
        </Grid>

        <Grid item xs={12} md={4}>
          <Map coords={coords}/>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Mapping;
