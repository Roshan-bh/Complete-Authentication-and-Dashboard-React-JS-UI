import React from 'react'
import Navbar from './Navbar'
import profile from '../images/profile.jpg';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-sm-6 text-center">
            <div className="">
              <img src={profile} style={{ height: '29vh', }} className="mt-5 rounded img-logo shadow border border-dark" alt="" />
            </div>
            <div className=" mt-3">
              <h4 className='font-monospace mb-2 text text-uppercase'>Roshan Bhandary</h4>
              <h4 className='font-monospace mb-2'>donework121@gmail.com</h4>
            </div>
            <hr />
            <div className="self-description">
              <p className='font'>Hi Myself, </p>
              <p className='text-monospace'>
                Roshan Bhandary,

                I'm a student as well as a part-time Freelancer currently working under contract as a computer operator at Department of National ID and Civil Registration under Ministry of Home Affairs, Nepal.

                I love web development and Graphics Designing so I'm here for you to give my training and skills while making a significant contribution to the success of your organization. I am eager to apply my knowledge and skills toward

                launching a successful career as a full-stack Python/Django Developer and a Graphics Designer.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact