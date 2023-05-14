import React, { useState } from 'react';

function FilterButton({ Text }) {
    // const {state, setState} = useState("heooooijfiowaejofwa");
    const [state, setState] = useState(0)
    function toggleButton () {
        setState(prevState => !prevState)
    }
  return (
    <button
    onClick={toggleButton}
    style={ state ? {
        color: '#272135',
        padding: '10px 16px',
        border: '1px solid #D7ECEB',
        borderRadius: '10px',
        height: 'min-content',
        width: 'min-content',
        margin: 0,
        background: '#D7ECEB',
        boxSizing: 'border-box',
        fontSize: '14px'
    } : {
        color: '#f1f1f1',
        padding: '10px 16px',
        border: '1px solid rgba(241, 241, 241, 0.25)',
        borderRadius: '10px',
        height: 'min-content',
        width: 'min-content',
        margin: 0,
        background: 'transparent',
        boxSizing: 'border-box',
        fontSize: '14px'
    }
    }>
        {Text}
    </button>
  )
}

export default FilterButton