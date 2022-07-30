import NavbarStaff from '@/components/layouts/staff/navbar-staff';
import React from 'react';

const Profile = () => {
    return (
        <>
            <NavbarStaff />
            <div className="container mt-3">
                <nav className='breadcrumb' aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
        </>
    );
};

export default Profile;