import React, { useState } from 'react'
import Navbar from './Navbar';
import { BiReset } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { GoVerified, GoUnverified } from "react-icons/go";


const ResetPassword = () => {
    const navigate = useNavigate()

    const [output, setOutput] = useState({
        status: false,
        msg: '',
        type: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const realData = {
            newPassword: data.get('newPassword'),
            confirmPassword: data.get('confirmPassword'),
        }
        if (realData.newPassword && realData.confirmPassword) {
            if (realData.newPassword === realData.confirmPassword) {
                setOutput({
                    status: true,
                    msg: 'Email send successfully please visit your email..',
                    type: 'success'
                });
                document.getElementById('reset-password').reset();
                setTimeout(() => {
                    navigate('/login')
                }, 1000)

            }
            else {
                setOutput({
                    status: true,
                    msg: 'New Password and Confirm Password Fields Both must be same..',
                    type: 'danger'
                });
            }

        }
        else {
            setOutput({
                status: true,
                msg: 'All Fields are Required!!',
                type: 'danger',
            });
        }
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-sm-8 shadow-lg">
                        <hr className='text-light' /><h2 className=' text-center header-space font-monospace '><BiReset /> Send Password Reset <BiReset /></h2> <hr className='text-light' />
                    </div>
                </div>
                {/* Main Form Starts */}
                <div className="row mt-4 justify-content-center">
                    <div className="col-sm-6 shadow-lg">
                        <form action="" method="post" id="reset-password" onSubmit={handleSubmit} noValidate>
                            <div className="form-group my-3">
                                <label htmlFor="userNewPassword" className=' font-monospace '>New Password*</label>
                                <input type="password" id="userNewPassword" className='form-control' name="newPassword" placeholder='Enter new password..' required />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="userConfirmPassword" className=' font-monospace '>Confirm Password*</label>
                                <input type="password" id="userConfirmPassword" className='form-control' name="confirmPassword" placeholder='Enter new confirm password..' required />
                            </div>
                            <div className='text-center'>
                                <button type="submit" className='font-monospace btn btn-secondary mb-3'>Save</button>
                            </div>
                            <div>

                                {/* Alert Message onSubmit.. */}
                                {output.status === true ?
                                    output.type === "success" ? <div className='alert alert-success p-1'>
                                        <GoVerified /> <small className='ms-2'>{output.msg}</small>
                                    </div> : <div className='alert alert-danger p-1 font-monospace'>
                                        <GoUnverified /> <small >{output.msg}</small>
                                    </div> : ''
                                }
                            </div>
                        </form>
                    </div>
                </div>
                {/* Main Form Part Ends */}
            </div>
        </>
    )
}



export default ResetPassword
