import React, { useState } from 'react'
import Navbar from './Navbar'
import { RiMailSendFill } from 'react-icons/ri';
import { GoVerified, GoUnverified } from "react-icons/go";

const SendPasswordResetEmail = () => {

  const [output, setOutput] = useState({
    status: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const realData = {
      email: data.get('email'),
    }
    if (realData.email) {
      setOutput({
        status: true,
        msg: 'Email send successfully please visit your email..',
        type: 'success'
      })
      document.getElementById('send-password-reset').reset();
    }
    else {
      setOutput({
        status: true,
        msg: 'Fill the correct email..'
      })
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-8 shadow-lg">
            <hr className='text-light' /><h2 className=' text-center header-space font-monospace '><RiMailSendFill /> Send Password Reset <RiMailSendFill /></h2> <hr className='text-light' />
          </div>
        </div>
        {/* Main Form Starts */}
        <div className="row mt-4 justify-content-center">
          <div className="col-sm-6 shadow-lg">
            <form action="" method="post" id="send-password-reset" onSubmit={handleSubmit} noValidate>
              <div className="form-group my-3">
                <label htmlFor="useremail" className=' font-monospace '>Email*</label>
                <input type="email" id="useremail" className='form-control' name="email" placeholder='Enter email address..' required />
              </div>
              <div className='text-center'>
                <button type="submit" className='font-monospace btn btn-secondary mb-3'>Send</button>
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

export default SendPasswordResetEmail