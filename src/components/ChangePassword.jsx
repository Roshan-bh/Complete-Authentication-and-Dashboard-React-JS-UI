import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaStackExchange } from "react-icons/fa";
import { GoVerified, GoUnverified } from "react-icons/go";


//Main Function Component
const Login = () => {

  //Output Handelling useState
  const [output, setOutput] = useState({
    status: false,
    msg: "",
    type: "",
  })
  //For Redirect Using useNavigate
  const navigate = useNavigate()

  //Form Submit Handelling
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const realData = {
      oldPassword: data.get('oldPassword'),
      newPassword: data.get('newPassword'),
      confirmPassword: data.get('confirmPassword'),
    }
    // console.log(realData);
    if (realData.oldPassword && realData.newPassword && realData.confirmPassword) {
      if (realData.newPassword === realData.confirmPassword) {
        setOutput({
          status: true,
          msg: "Form Submitted Successfully!!",
          type: "success"
        })
        document.getElementById('change-password').reset()
        setTimeout(() => {
          navigate('/login')
        }, 500)
      }
      else {
        setOutput({
          status: true,
          msg: "New Password and Confirm Password Fields must have same value..!!",
          type: "danger",
        })
      }

    }
    else {
      setOutput({
        status: true,
        msg: "All Fields are Required!!",
        type: 'danger'
      })
    }
  }

  return (
    <>

      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-8 shadow-lg">
            <hr className='text-light' /><h2 className=' text-center header-space font-monospace '>Change Password <FaStackExchange /></h2> <hr className='text-light' />
          </div>
        </div>
        {/* Main Form Starts */}
        <div className="row mt-4 justify-content-center">
          <div className="col-sm-6 shadow-lg">
            <form action="" method="post" id="change-password" onSubmit={handleSubmit} noValidate>
              <div className="form-group my-3">
                <label htmlFor="userOldPassword" className=' font-monospace '>Old Password*</label>
                <input type="password" id="userOldPassword" className='form-control' name="oldPassword" placeholder='Enter old password..' required />
              </div>
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
                    <GoVerified /> <small>{output.msg}</small>
                  </div> : <div className='alert alert-danger p-1 font-monospace'>
                    <GoUnverified /> <small>{output.msg}</small>
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

export default Login