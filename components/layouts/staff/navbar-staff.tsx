import React from 'react';
import Link from 'next/link';


const NavbarStaff = () => {
    return (
        <nav className="student-navbar navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href={'/staff'} >
                    <a className="navbar-brand" href="#">
                        <img style={{ width: '200px' }} src="https://registrar.kku.ac.th/wp-content/uploads/2022/01/h002.png" alt="logo" className='img-fluid' />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={'/staff/preview-queue'} >
                                <a className="nav-link color-white" target='_blank' aria-current="page">แสดงคิว</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/staff/manage-queue'} >
                                <a className="nav-link color-white" aria-current="page">จัดการคิว</a>
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle color-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                เลือกทำรายการ
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link href='/staff/request-document'>
                                        <a className="dropdown-item" href="#">ขอเอกสารสำคัญ</a>
                                    </Link></li>
                                <li>
                                    <Link href='/staff/pay-fee'>
                                        <a className="dropdown-item" href="#">ชำระค่าธรรมเนียม</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/staff/other'><a className="dropdown-item" href="#">อื่นๆ</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link  position-relative color-white" aria-current="page" href="#">

                                <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                                    0
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                                <i className="bi bi-bell "></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle color-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nuttaphon Chanpan

                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link href={'/staff/profile'} >
                                        <a className="dropdown-item" href="#">โปรไฟล์</a>
                                    </Link>

                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#">ออกจากระบบ</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default NavbarStaff;