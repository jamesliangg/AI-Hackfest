import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from "@material-ui/core";

import Mapp from "./components/Mapp/Mapp";
import Header from './components/Header/Header'

const Map = () => {
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
      {/* <CssBaseline /> */}
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />

        <Grid item xs={12} md={4}>
          <Mapp coords={coords}/>
        </Grid>
      
    </div>
  );
}

export default Map;