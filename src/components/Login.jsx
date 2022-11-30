import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { RiLoginBoxFill } from "react-icons/ri";
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
      email: data.get('email'),
      password: data.get('password'),
    }
    // console.log(realData);
    if (realData.email && realData.password) {
      setOutput({
        status: true,
        msg: "Form Submitted Successfully!!",
        type: "success"
      })
      document.getElementById('login-form').reset()
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)

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
            <hr className='text-light' /><h2 className=' text-center header-space font-monospace '>Login <RiLoginBoxFill /></h2> <hr className='text-light' />
          </div>
        </div>
        {/* Main Form Starts */}
        <div className="row mt-4 justify-content-center">
          <div className="col-sm-6 shadow-lg">
            <form action="" method="post" id="login-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group my-3">
                <label htmlFor="useremail" className=' font-monospace '>Email*</label>
                <input type="email" id="useremail" className='form-control' name="email" placeholder='Enter email address..' required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="userpassword" className=' font-monospace'>Password*</label>
                <input type="password" id="userpassword" className='form-control' name="password" placeholder='Enter password..' required />
              </div>
              <Link to="/send-password-reset-email">Forgot Password</Link>
              <div className='text-center'>
                <button type="submit" className='font-monospace btn btn-secondary mb-3'>Login</button>
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