import React from 'react';
import Arrow from '../assets/Arrow.png'
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      // border: '1px solid black',
      marginTop: '5vh',
    }}>

      <h1 style={{
        fontWeight: '500',
        fontSize: '112px',
        lineHeight: '120px',
        width: '7ch'
      }}>LIVE HEALTHY LIVE SMART</h1>
      

      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'flex-end',
        alignItems: 'center'

      }}>
        <Link to='/home' style={{
          background: '#FDC8E8',
          width: '45%',
          aspectRatio: 1,
          borderRadius: '30px',
          border: '2px solid #2D263D',
          color: '#2D263D',
          textDecoration: 'none',
          fontSize: '48px',
          padding: "0 40px",
          boxSizing: 'border-box',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center'
        }}>
          <p>FIND NEARBY DOCTORS</p>
        </Link>
        <Link to='/home' style={{
          background: '#EBEBEB',
          width: '45%',
          aspectRatio: 1,
          borderRadius: '30px',
          border: '2px solid #2D263D',
          color: '#2D263D',
          textDecoration: 'none',
          fontSize: '48px',
          padding: "0 40px",
          boxSizing: 'border-box',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center'
        }}>LEARN ABOUT YOUR DOCTOR</Link>
        <Link to='/home' style={{
          background: '#D7ECEB',
          width: '45%',
          aspectRatio: 1,
          borderRadius: '30px',
          border: '2px solid #2D263D',
          color: '#2D263D',
          textDecoration: 'none',
          fontSize: '48px',
          padding: "0 40px",
          boxSizing: 'border-box',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center'
        }}>RATE YOUR DOCTOR</Link>

        <Link to="/home" style={{
          borderRadius: '50%',
          background: '#2D263D',
          width: '45%',
          aspectRatio: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={Arrow} alt="" />
        </Link>
      </div>

    </div>
  );
};

export default Landing;