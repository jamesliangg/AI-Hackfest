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

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Link to="/" style={{
          width: 'min-content',
          height: 'min-content',
        }}>
          <img src={Logo} alt="" style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
          }}/></Link>
        <h2 style={{
          fontWeight: '400'
        }}>FindYours</h2>
      </div>
      

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
