import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import SendPasswordResetEmail from './components/SendPasswordResetEmail';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import ChangePassword from './components/ChangePassword';

export default function App() {
  return (
    <>
        <BrowserRouter>
        
            <Routes>
                  <Route path='/' element={<Home/>}/>
                      <Route path='contact' element={<Contact/>}/>
                      <Route path='login' element={<Login/>}/>
                      <Route path='registration' element={<Registration/>}/>
                      <Route path='send-password-reset-email' element={<SendPasswordResetEmail/>}/>
                      <Route path='reset-password' element={<ResetPassword/>}/>
                      <Route path='dashboard' element={<Dashboard/>}/> 
                      <Route path='dashboard/change-password' element={<ChangePassword/>}/> 
                      <Route path='*' element={<h1 className='my-5 text-center'>Error Page Not Found ... <b>enter valid url.</b></h1>}></Route> 
            </Routes>
        
        </BrowserRouter>
  </>
  )
}
