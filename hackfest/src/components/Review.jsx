import React from 'react'

function Review({ Name, Text, Star }) {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 'fit-content',
        flexDirection: 'column',
        gap: "10px"
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '30px',
            alignItems: 'center',
            gap: "10px",
            padding: 0,
        }}>
            <img src="" alt="" style={{
                height: "100%",
                aspectRatio: 1,
                borderRadius: '50%',
                background: '#272135'
            }}/>
            <p style={{
                flex: 1,
                height: 'min-content',
                fontSize: '20px',
                fontWeight: '400',
                // border: "1px solid black"
            }}>{Name}</p>
            <img src={Star} alt="Star" style={{
                // width: "min-content",
                height: '70%',
                objectFit: 'contain',
            }}/>
        </div>
        <p style={{
            margin: "0 auto",
            marginLeft: "40px",
            fontSize: '14px',
            fontWeight: '400',
        }}>{Text}</p>
    </div>
  )
}

export default Review