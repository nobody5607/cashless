import NavbarStudent from '@/components/layouts/student/navbar-student';
import React from 'react';

const Profile = () => {
  return (
    <>
      <NavbarStudent />

      <div className="container">
        <nav className='breadcrumb' aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
        <nav className='breadcrumb' aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>


        <h3>Profile</h3>
      </div>
    </>
  );
};

export default Profile;