import Link from 'next/link';
import React from 'react';

const NavbarStudent = () => {
    return (
        <nav className="student-navbar navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href={'/student'} >
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
                            <Link href={'/student/booking'}>
                                <a className="nav-link color-white" aria-current="page" href="#">จองคิว</a>
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle color-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                เลือกทำรายการ
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link href='/student/request-document'>
                                        <a className="dropdown-item" href="#">ขอเอกสารสำคัญ</a>
                                    </Link></li>
                                <li>
                                    <Link href='/student/pay-fee'>
                                        <a className="dropdown-item" href="#">ชำระค่าธรรมเนียม</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/student/other'><a className="dropdown-item" href="#">อื่นๆ</a>
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
                                <Link href={'/student/profile'} >
                                    <a className="dropdown-item" href="#">โปรไฟล์</a>
                                </Link>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">ออกจากระบบ</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default NavbarStudent;