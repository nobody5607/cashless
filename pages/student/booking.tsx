import NavbarStudent from '@/components/layouts/student/navbar-student';
import React from 'react';

const Booking = () => {
    return (
        <>
            <NavbarStudent />
            <nav className='breadcrumb' aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </>
    );
};

export default Booking;