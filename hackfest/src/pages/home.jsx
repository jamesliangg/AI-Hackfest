import React, { useState } from 'react';
import Location from '../assets/Location.png'
import FilterButton from '../components/FilterButton';
import DoctorProfile from '../components/DoctorProfile';
import OneStar from '../assets/1Star.png'
import TwoStar from '../assets/2Star.png'
import ThreeStar from '../assets/3Star.png'
import FourStar from '../assets/4Star.png'
import FiveStar from '../assets/5Star.png'
import Saved from '../assets/Saved.png'
import Unsaved from '../assets/Unsaved.png'

export const Home = () => {
  // const [selected,setSelected] = useState(false)

  return (
    <div style={{
      height: 'calc(100vh - 100px',
      display: 'flex',
      gap: '80px'
    }}>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '45%',
        justifyContent: 'space-between',
        height: 'calc(100vh - 100px)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <img src={Location} alt="" />
          <p>Location</p>
        </div>

        <input type="text" placeholder="Search" style={{
          height: '60px',
          borderRadius: '10px',
          border: '1px solid rgba(39, 33, 53, 0.25)',
          padding: '10px 20px',
          boxSizing: 'border-box',
          fontSize: '16px'
        }}></input>

        {/* filter */}
        <div style={{
          background: '#272135',
          borderRadius: '20px 20px 0 0',
          padding: '40px 40px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <h3 style={{
              color: '#f1f1f1',
              margin: 0,
            }}>Language</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              height: 'fit-content'
            }}>
              <FilterButton Text="English"/>
              <FilterButton Text="French"/>
              <FilterButton Text="Spanish"/>
              <FilterButton Text="Mandarin"/>
              <FilterButton Text="Cantonese"/>
              <FilterButton Text="Japanese"/>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <h3 style={{
              color: '#f1f1f1',
              margin: 0,
            }}>Rating</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              height: 'fit-content'
            }}>
              <FilterButton Text="1"/>
              <FilterButton Text="2"/>
              <FilterButton Text="3"/>
              <FilterButton Text="4"/>
              <FilterButton Text="5"/>
            </div>
          </div>


          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <h3 style={{
              color: '#f1f1f1',
              margin: 0,
            }}>Education</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              height: 'fit-content'
            }}>
              <FilterButton Text="UofT"/>
              <FilterButton Text="Waterloo"/>
              <FilterButton Text="McMaster"/>
              <FilterButton Text="Queens"/>
            </div>
          </div>


          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <h3 style={{
              color: '#f1f1f1',
              margin: 0,
            }}>Gender</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              height: 'fit-content'
            }}>
              <FilterButton Text="Male"/>
              <FilterButton Text="Female"/>
            </div>
          </div>

          <button style={{
            fontSize: '16px',
            color: '#272135',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            background: '#D7ECEB',
            border: 'none',

          }}>Apply</button>

        </div>
      </div>

      <div style={{
        flexGrow: 1,
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        gap: "20px",
        paddingBottom: '400px'
      }}>
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={false} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={false} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={false} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={false} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={false} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={false} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={false} />
      </div>
    </div>
  );
};

export default Home;