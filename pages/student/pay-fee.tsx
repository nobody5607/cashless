import NavbarStudent from "@/components/layouts/student/navbar-student";
import React from "react";

type Props = {};

const PayFee = (props: Props) => {
  return (
    <>
      <NavbarStudent />
      <div className="container mt-3">
        <nav className="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
        <h1 className="text-center">ชำระค่าธรรมเนียม</h1>

        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h1>OK</h1>
                <h1 className="text-center">รอ QR Code</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayFee;
