import React, {useState} from 'react';
import Saved from '../assets/Saved.png'
import Unsaved from '../assets/Unsaved.png'
import DoctorCharacteristics from '../components/DoctorCharacteristics'
import Review from '../components/Review';

import OneStar from '../assets/1Star.png'
import TwoStar from '../assets/2Star.png'
import ThreeStar from '../assets/3Star.png'
import FourStar from '../assets/4Star.png'
import FiveStar from '../assets/5Star.png'

function Doctor () {
  const [saved, setSaved] = useState(false)
  function toggleSaved() {
      setSaved(prevSaved => !prevSaved)
  }
  return (
    <div style={{
      display: 'flex',
      gap: "80px"
    }}>
      <div style={{
        width: '25%',
      }}>
        <h2 style={{
            fontWeight: "400",
            fontSize: "24px",
            padding: "20px 0",
            margin: 0,
          }}>Practise Information</h2>
        <div style={{
          background: "#272135",
          borderRadius: "20px",
          height: "fit-content",
          padding: '30px',
          color: '#f1f1f1',
          fontSize: '16px'
        }}>
          <p>Address</p>
          <p>412-234-3432</p>
          <p>example@gmail.com</p>
        </div>
      </div>

      <div style={{
        width: '70%',
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "20px",
        height: 'calc(100vh - 100px)',
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}>
        <div style={{
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
              boxSizing: 'border-box',
              borderRadius: '30px',
              border: "none"
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
                  fontSize: '32px',
                  fontWeight: "400",
              }}>Name</p>
              <p style={{
                  padding: '0',
                  margin: '0',
                  fontSize: '20px',
                  fontWeight: "400",
              }}>Location</p>
              <img src={OneStar} alt=""  style={{
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
        </div>


        <div style={{
          display: "flex",
          gap: "10px",
        }}>
          <DoctorCharacteristics Text="English" Background="Coloured"/>
          <DoctorCharacteristics Text="French" Background="Coloured"/>
          <DoctorCharacteristics Text="Male" Background="Not"/>
        </div>

        <p style={{
          padding: 0,
          margin: 0,
          fontSize: '16px',
          fontWeight: '400',
        }}>Education</p>

        <div style={{
          display: "flex",
          flexDirection: 'column',
          // gap: "20px"
        }}>
          <h2 style={{
            fontWeight: "400",
            fontSize: "24px",
            padding: "20px 0",
            margin: 0,
          }}>Specialty</h2>
          <div style={{
            display: "flex",
            gap: "10px",
          }}>
            <DoctorCharacteristics Text="Internal Medicine" Background="Not"/>
            <DoctorCharacteristics Text="Internal Medicine" Background="Not"/>
            <DoctorCharacteristics Text="Internal Medicine" Background="Not"/>
          </div>
        </div>

        <hr style={{
          width: "100%",
          height: "1px",
          border: "1px solid rgba(39, 33, 53, 0.25)"
        }}/>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          paddingBottom: '400px'
        }}>
          <h2 style={{
            fontWeight: "400",
            fontSize: "24px",
            padding: "20px 0",
            margin: 0
          }}>Reviews</h2>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>
          <Review Star={OneStar} Name="John Doe" Text="Lorem ipsum dolor sit amet consectetur. A eu vitae porta rhoncus vitae nulla nisl sapien. Eget nibh pharetra mi tristique nec. Amet massa eget quis arcu sollicitudin nulla a volutpat egestas. "></Review>

        </div>
      </div>
    </div>
  
  );
};

export default Doctor;