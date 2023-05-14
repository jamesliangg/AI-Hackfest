import React from 'react'
import Map from '../components/Map'

const Map = () => {
  return (
    <div style={{
        width: '100%',
        height: 'calc(100vh - 100px)'
    }}>
        <input type="text" placeholder="Search" style={{
            height: '60px',
            borderRadius: '10px',
            border: '1px solid rgba(39, 33, 53, 0.25)',
            padding: '10px 20px',
            boxSizing: 'border-box',
            fontSize: '16px',
            background: '#f1f1f1',
            flex: 1,
            width: '60%',
        }}></input>
        <Map style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}></Map>
    </div>
  )
}

export default Map