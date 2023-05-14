import React, { useState } from 'react';

function DoctorCharacteristics({ Text, Background }) {
  return (
    <button
    style={ Background == "Coloured" ? {
        color: '#272135',
        padding: '10px 16px',
        border: '1px solid #D7ECEB',
        borderRadius: '10px',
        height: 'min-content',
        width: 'fit-content',
        margin: 0,
        background: '#D7ECEB',
        boxSizing: 'border-box',
        fontSize: '16px',
        fontWeight: '400',
    } : {
        color: '#272135',
        padding: '10px 16px',
        border: '1px solid #272135',
        borderRadius: '10px',
        height: 'min-content',
        width: 'fit-content',
        margin: 0,
        background: 'transparent',
        boxSizing: 'border-box',
        fontSize: '16px',
        fontWeight: '400',
    }
    }>
        {Text}
    </button>
  )
}

export default DoctorCharacteristics