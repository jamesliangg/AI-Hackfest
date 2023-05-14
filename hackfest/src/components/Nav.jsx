import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Nav = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100px',
     }}>

      <Link style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: 'min-content',
        height: 'min-content',
        textDecoration: 'none',
        color: "#2D263D"
      }}>
          <img src={Logo} alt="" style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
          }}/>
        <h2 style={{
          fontWeight: '400'
        }}>FindYours</h2>
      </Link>
      

      <div style={{
        display: 'flex',
        height: 'min-content',
        gap: '16px'
      }}>
        <Link to="/home" style={{
          textDecoration: 'none',
          color: '#2D263D',
          padding: '16px 20px',
          borderRadius: '30px',
          border: '2px solid #2D263D'
        }}>Home</Link>
        <Link to="/bookmarks" style={{
          textDecoration: 'none',
          color: '#2D263D',
          padding: '16px 20px',
          borderRadius: '30px',
          border: '2px solid #2D263D'
        }}>Bookmarks</Link>
      </div>

    </div>
  );
};

export default Nav;
