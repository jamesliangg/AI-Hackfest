
import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from "@material-ui/core";
import Mapping from './Mapping';

//import Map from './components/Map/Map';
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";

function App() {

  return (
    <div>
      <Mapping/>
    </div>
  );
}

export default App;
