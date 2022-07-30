import React from 'react';
import { useRouter } from 'next/router';
const Login = () => {
    const router = useRouter();
    const login = () => {
        router.push('/student');
    };
    return (
        <div className=" d-flex justify-content-center align-items-center align-self-center" style={{ minHeight: '100vh' }} >
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className="col-md-4">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3">Login</h5>

                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="email" className="form-control" id="username" aria-describedby="username" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEpasswordmail1" className="form-label">Password</label>
                                    <input type="email" className="form-control" id="password" aria-describedby="password" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button onClick={login} className="btn btn-primary" type="button">Login</button>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Login;