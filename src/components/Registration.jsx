import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { FaRegistered } from "react-icons/fa";
import { GoVerified, GoUnverified } from "react-icons/go";

const Registration = () => {
  const navigate = useNavigate()
  //Output Handelling useState
  const [output, setOutput] = useState({
    status: false,
    msg: "",
    type: "",
  })

  //Form Submit Handelling
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const realData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirm_password: data.get('confirmpassword'),
      terms_condition: data.get('tc'),
    }
    // console.log(realData);
    if (realData.name && realData.email && realData.password && realData.confirm_password && realData.terms_condition != null) {
      if (realData.password === realData.confirm_password) {
        setOutput({
          status: true,
          msg: "Account Registered Successfully!!",
          type: "success"
        })
        document.getElementById('registration-form').reset()
        setTimeout(() => {
          navigate('/dashboard')
        }, 500)

      }
      else {
        setOutput({
          status: true,
          msg: "Password and Confirm Password Must be Same..!!",
          type: "danger"
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
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-8 shadow-lg">
            <hr className='text-light' /><h2 className=' text-center header-space font-monospace '>Registration <FaRegistered /></h2> <hr className='text-light' />
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-sm-6 shadow-lg">
            <form action="" method="post" onSubmit={handleSubmit} id='registration-form' noValidate>
              <div className="form-group my-3">
                <label htmlFor="username" className='font-monospace'>Username*</label>
                <input type="text" id="username" className='form-control' name="name" placeholder='Enter name..' required />
              </div>
              <div className="form-group my-3">
                <label htmlFor="useremail" className='font-monospace'>Email*</label>
                <input type="email" id="useremail" className='form-control' name="email" placeholder='Enter email address..' required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="userpassword" className='font-monospace'>Password*</label>
                <input type="password" id="userpassword" className='form-control' name="password" placeholder='Enter password..' required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="userpasswordconfirm" className='font-monospace'>Confirm Password*</label>
                <input type="password" id="userpasswordconfirm" className='form-control' name="confirmpassword" placeholder='Enter confirm password..' required />
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" id='terms&condition' className='form-check-input' name="tc" value="checked" />
                <label htmlFor="terms&condition" className='font-monospace form-check-label'> Accept Terms & Condition</label>
              </div>
              <div className='text-center '>
                <button type="submit" className='font-monospace btn btn-secondary mb-3'>Register</button>
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
      </div>
    </>
  )
}

export default Registration