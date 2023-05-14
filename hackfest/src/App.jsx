import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Landing from "./pages/landing"
import Doctor from "./pages/doctor"
import Bookmarks from "./pages/bookmarks"
import Map from "./pages/map"
import './index.css'

const App = () => {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
