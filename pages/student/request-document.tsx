import NavbarStudent from '@/components/layouts/student/navbar-student';
import React from 'react';

type Props = {

};
const mocks = [
    {
        id: 1,
        name: 'abc1',
        sub_document: [
            { id: '11', name: 'abc11', max: 5 },
            { id: '12', name: 'abc12', max: 4 },
            { id: '13', name: 'abc14', max: 4 },
        ]
    },
    {
        id: 2,
        name: 'defg',
        sub_document: [
            { id: '21', name: 'abc11', max: 5 },
            { id: '22', name: 'abc12', max: 4 },
            { id: '23', name: 'abc14', max: 4 },
        ]
    },
    {
        id: 3,
        name: 'hijk',
        sub_document: [
            { id: '21', name: 'hijk1', max: 5 },
            { id: '22', name: 'hijk2', max: 4 },
            { id: '23', name: 'hijk4', max: 4 },
        ]
    }
];
const RequestDocument = (props: Props) => {
    return (
        <>
            <NavbarStudent />

            <div className="container mt-3">
                <nav className='breadcrumb' aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>

                <h1 className='text-start'>ขอเอกสารสำคัญ</h1>
                <div className="card">
                    <div className="card-body">
                        <h3>เลือกรายการ</h3>
                        <ul className="list-group list-group-flush">
                            {mocks && mocks.map((data, index) =>
                                <li key={index} className="list-group-item">{data.name}</li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h3>เลือกช่วงวันที่</h3>
                        <ul className="list-group list-group-flush">
                            {mocks && mocks.map((data, index) =>
                                <li key={index} className="list-group-item">{data.name}</li>
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default RequestDocument;