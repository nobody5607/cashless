import React, { useState } from 'react';
import Link from 'next/link';


const MenuMobile = () => {
    const [showSearch, setShowSearch] = useState<boolean>(false);
    return (
        <>
            <div className='fixed-top' style={{ boxShadow: '0 20px 20px -20px rgb(0 0 0 / 16%)', background: '#fff' }}>
                <div className='m-header'>
                    <div className='m-bar'>
                        <a data-bs-toggle="offcanvas" href="#offcanvasMenuLeft">
                            <i className="bi bi-list" ></i>
                        </a>
                    </div>
                    <div className='m-logo'>
                        <Link href='/'>
                            <a><img src="/images/logo.png" /></a>
                        </Link>
                    </div>
                    <div className='m-search'>

                    </div>
                    <div className='m-cart-account'>
                        <div >
                            <i onClick={() => setShowSearch(!showSearch)} className='bi bi-search'></i>
                        </div>
                        <div>
                            <a className="position-relative text-while">
                                <i className="bi bi-cart2"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-count">
                                    1
                                </span>
                            </a>


                        </div>
                        <div className="nav-tools align-items-baseline d-flex">
                            <a className="nav-link dropdown-toggle text-while" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                {showSearch && <div className='m-search-panel'>
                    <div className="form">
                        <input type="text" className="form-control form-input" placeholder="ค้นหาจากสินค้าทั้งหมด" />
                        <span className="left-pan"><i className="bi bi-search" /></span>
                    </div>
                </div>}

            </div>

            {/* left menu */}

            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasMenuLeft" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">หมวดหมู่สินค้า</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body" style={{ padding: '0' }}>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            เหล็ก
                            <i className="bi bi-chevron-right"></i>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            คอนกรีต
                            <i className="bi bi-chevron-right"></i>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            A third list item
                            <i className="bi bi-chevron-right"></i>
                        </li>
                    </ul>

                </div>
            </div>


        </>
    );
};

export default MenuMobile;