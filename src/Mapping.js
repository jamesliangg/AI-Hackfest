
import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from "@material-ui/core";

//import Map from './components/Map/Map';
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";

function Mapping() {
  const [autocomplete, setAutocomplete] = useState(null);


  return (
    <div>
      <CssBaseline />
      {/* <Header/> */}
      <Grid container spacing={3} style={{ width: "100%" }}>

        <Grid item xs={12} md={4}>
          <div>List</div>
        </Grid>

        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Mapping;
