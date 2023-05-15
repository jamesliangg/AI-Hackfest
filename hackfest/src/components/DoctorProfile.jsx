import React, {useState} from 'react'
import Saved from '../assets/Saved.png'
import Unsaved from '../assets/Unsaved.png'
import { Link } from 'react-router-dom';


function DoctorProfile({ Name, Location, Stars, Bookmark}) {
    const [saved, setSaved] = useState(Bookmark)
    function toggleSaved() {
        setSaved(prevSaved => !prevSaved)
    }
  return (
    <Link to='/doctor' style={{
        border: '3px solid #272135',
        borderRadius: '30px',
        display: 'flex',
        position: 'relative',
        height: "130px",
        width: "100%",
        boxSizing: 'border-box',
        padding: "2px",
        gap: '20px',
        textDecoration: 'none',
        color: "#272135"
    }}>
        <img src="" alt="" style={{
            background: '#D7ECEB',
            height: "100%",
            aspectRatio: 1,
            border: '2px solid #272135',
            boxSizing: 'border-box',
            borderRadius: '30px',
            
        }}/>
        <div style={{
            height: 'fit-content',
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'column',
            gap: '6px',
            flexGrow: 1,
        }}>
            <p style={{
                padding: '0',
                margin: '0',
                fontSize: '24px',
            }}>{Name}</p>
            <p style={{
                padding: '0',
                margin: '0',
                fontSize: '16px'
            }}>{Location}</p>
            <img src={Stars} alt=""  style={{
                height: "fit-content",
                width: '100px',
                objectFit: 'cover',
            }}/>
        </div>
        {saved && <img src={Saved} alt="Image" onClick={toggleSaved}
        style={{
            width: '25px',
            aspectRation: 1,
            objectFit: 'contain',
            paddingRight: '30px',
        }}/>}
        {!saved && <img src={Unsaved} alt="Image" onClick={toggleSaved}
        style={{
            width: '25px',
            aspectRation: 1,
            objectFit: 'contain',
            paddingRight: '30px',
        }}/>}
        {/* <img src={saved} alt="" 
        onClick={toggleSaved}
        style={{
            width: '25px',
            aspectRation: 1,
            objectFit: 'contain',
            paddingRight: '30px',
        }}/> */}
    </Link>
  )
}

export default DoctorProfile