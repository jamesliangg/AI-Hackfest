import React from 'react';
import DoctorProfile from '../components/DoctorProfile';
import OneStar from '../assets/1Star.png'
import TwoStar from '../assets/2Star.png'
import ThreeStar from '../assets/3Star.png'
import FourStar from '../assets/4Star.png'
import FiveStar from '../assets/5Star.png'


const Bookmarks = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        paddingBottom: '400px'
    }}>
        <h2 style={{
            fontSize: '32px',
            fontWeight: '400',
            padding: 0,
        }}>Your Bookmarked</h2>
        
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={true} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={true} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={true} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={true} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={true} />
        <DoctorProfile Name="John Doe" Location="Look behind you" Stars={FiveStar} Bookmark={true} />
    </div>
  );
};

export default Bookmarks;