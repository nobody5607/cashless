import NavbarStaff from '@/components/layouts/staff/navbar-staff';
import React from 'react';

type Props = {};

const RequestDocument = (props: Props) => {
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
                <h1 className='text-center'>อื่นๆ</h1>
            </div>
        </>
    );
};

export default RequestDocument;