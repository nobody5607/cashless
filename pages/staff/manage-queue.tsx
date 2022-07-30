import NavbarStaff from '@/components/layouts/staff/navbar-staff';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io('localhost:3002');

export interface Queue {
    chanel: number;
    queue: number;
};

const MangeQueue = () => {
    const [chanel, setChanel] = useState(0);
    const [queue, setQueue] = useState(0);

    useEffect(() => {
        socket.on('queue-message', (payload) => {
            const result = payload as Queue;
            setChanel(result.chanel);
            setQueue(result.queue);
            console.log(result.chanel);
        });
    }, []);

    const sendMessage = () => {
        const queueObj = { queue: queue, chanel: chanel };
        socket.emit('queue-message', queueObj);
    };

    return (
        <>
            <NavbarStaff />

            <div className="theme-1 container mt-3">
                <nav className='breadcrumb' aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>


                <div className="card mt-3">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>จำนวนคิวล่าสุด</h3>
                        </div>
                        <div className='row justify-content-center'>
                            <div className="col-6">
                                <div>
                                    <label>เลือกหมายเลขช่องบริการ</label>
                                </div>
                                <div>
                                    <select className='form-control input-lg' value={chanel}>
                                        <option>-เลือกช่องบริการ-</option>
                                        <option>ช่องบริการ 1</option>
                                        <option>ช่องบริการ 2</option>
                                        <option>ช่องบริการ 3</option>
                                        <option>ช่องบริการ 4</option>
                                    </select>
                                </div>
                                <div className='row mt-3'>
                                    <div className="col-4 center-screen">
                                        <label className='text-bold'>คิวที่เลือก</label>
                                    </div>
                                    <div className="col-4 center-screen">
                                        <input type='number' className='form-control input-lg' value={queue} />
                                    </div>
                                    <div className="col-4 center-screen">
                                        <label className='text-bold'>เหลือ 10 คิว</label>
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-6 justify-content-center">
                                        <button onClick={sendMessage} className='btn btn-danger btn-lg'><i className="bi bi-caret-left"></i> เรียกคิวเดิม</button>
                                    </div>
                                    <div className="col-6 justify-content-center">
                                        <button onClick={sendMessage} className='btn btn-success btn-lg'>เรียกคิวถัดไป <i className="bi bi-caret-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-5">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>จำนวนคิวทั้งหมด</h3>
                        </div>
                        <div className='table-responsive'>
                            <table className='table table-bordered table-responsive'>
                                <thead>
                                    <tr>
                                        <th className='text-center' style={{ width: '100px' }}>ลำดับที่</th>
                                        <th className='text-center'>เวลา</th>
                                        <th className='text-center'>ชื่อ-นามสกุล</th>
                                        <th className='text-center'>ประเภท</th>
                                        <th className='text-center' style={{ width: '200px' }}>คิว</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'>1</td>
                                        <td>09:32:04</td>
                                        <td>Nuttaphon Chanpan</td>
                                        <td className='text-center text-success'>ทั่วไป</td>
                                        <td className="text-center">
                                            <button className='btn btn-danger'>ยกเลิก</button>&nbsp;
                                            <button className='btn btn-success'>เรียกคิว </button>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>1</td>
                                        <td>09:32:04</td>
                                        <td>Nuttaphon Chanpan</td>
                                        <td className='text-center text-warning'>จองล่วงหน้า</td>
                                        <td className="text-center">
                                            <button className='btn btn-danger'>ยกเลิก</button>&nbsp;
                                            <button className='btn btn-success'>เรียกคิว <i className="bi bi-caret-right"></i></button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default MangeQueue;