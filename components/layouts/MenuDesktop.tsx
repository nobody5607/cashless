import Link from 'next/link';
import router, { useRouter } from 'next/router';
import React, { useState } from 'react';

const MenuDesktop = () => {
    const [active, setActive] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');

    const showMegaMenu = (id: string) => {
        if (id == selected) {
            setActive(false);
            setSelected('');
        } else {
            setActive(true);
            setSelected(id);
        }
    };

    const hideMegaMenu = () => {
        // setActive(false);
        // setSelected('');
    };


    const handleLocaleChange = (event: any) => {
        const value = event.target.value;
        router.push(router.route, router.asPath, {
            locale: value,
        });
    };

    return (
        <>
            <div className="container">
                <div className="logo">
                    <Link href={'/'} >
                        <a className="cu-pointer"><img src="/images/logo.png" /></a>
                    </Link>
                </div>
                <div className="main-search show">
                    <div className="form">
                        <input type="text" className="form-control form-input" placeholder="ค้นหาจากสินค้าทั้งหมด" />
                        <span className="left-pan"><i className="bi bi-search" /></span>
                    </div>

                </div>
                <div className="account cart-and-wishlist-ctr">
                    <div>
                        <a className="position-relative text-while">
                            <i className="bi bi-cart2"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-count">
                                1
                                <span className="visually-hidden"></span>
                            </span>
                        </a>


                    </div>

                    <div className="nav-tools align-items-baseline d-flex">
                        <select onChange={handleLocaleChange} value={router.locale}>
                            <option value="en">🇺🇸 English</option>
                            <option value="th">🇨🇳 Thai</option>
                        </select>
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


            <div className="border-top" style={{ borderBottom: '1px solid #ebebeb', background: '#fff' }} >
                <div className="container" >
                    <ul className="nav nav-pills nav-fill menu">
                        <li className={`nav-item ${selected == '11' ? 'active' : ''}`}
                            onBlur={hideMegaMenu}
                            onClick={() => showMegaMenu('11')}>
                            <a className="nav-link color-primary" aria-current="page" href="#">โครงสร้าง</a>
                        </li>
                        <li className={`nav-item ${selected == '12' ? 'active' : ''}`} onClick={() => showMegaMenu('12')}>
                            <a className="nav-link color-primary" href="#">ฮาร์ดแวร์ สี เคมีก่อสร้าง</a>
                        </li>
                        <li className="nav-item" onClick={() => showMegaMenu('13')}>
                            <a className="nav-link color-primary" href="#">ประตู ห้องน้ำ ห้องครัว</a>
                        </li>
                        <li className="nav-item" onClick={() => showMegaMenu('14')}>
                            <a className="nav-link color-primary" href="#">ระบบไฟฟ้า และน้ำ</a>
                        </li>
                        <li className="nav-item" onClick={() => showMegaMenu('15')}>
                            <a className="nav-link color-primary" href="#">การเกษตร</a>
                        </li>
                        <li className="nav-item" onClick={() => showMegaMenu('16')}>
                            <a className="nav-link color-primary" href="#">เครื่องใช้ในบ้าน</a>
                        </li>
                        <li className="nav-item" onClick={() => showMegaMenu('17')}>
                            <a className="nav-link color-primary" href="#">ผลิตภัณฑ์</a>
                        </li>
                        <li className="nav-item" onClick={() => showMegaMenu('18')}>
                            <a className="nav-link color-primary" href="#">อื่นๆ</a>
                        </li>
                        <li className="nav-item" onClick={() => showMegaMenu('18')}>
                            <a className="nav-link color-primary" href="#">โปรโมชั่น</a>
                        </li>
                    </ul>
                </div>

                {active ? <div className="container mega-menu" >
                    <div className='mega-menu'>
                        <div className="row">
                            <div className="col-3">
                                <div>เหล็ก</div>
                                <ul>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                </ul>

                            </div>
                            <div className="col-3">
                                <div>เหล็ก</div>
                                <ul>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <div>เหล็ก</div>
                                <ul>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <div>เหล็ก</div>
                                <ul>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                    <li><a href='#'>xxx</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div> : <></>}


            </div>
        </>
    );
};

export default MenuDesktop;