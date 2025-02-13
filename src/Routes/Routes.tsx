import React from 'react'
import PrivateRoutes from './PrivateRoutes'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Auth/Login'
import Updatepassword from '../Components/Auth/Updatepassword'
import Otp from '../Components/Auth/OTP'
import Profiledata from '../Components/Profiledata'
import Socialdata from '../Components/Socialdata'
import Postdata from '../Components/Postdata'
import Profileinformation from '../Components/Profileinformation'
import Editprofile from '../Components/Editprofile'
import Safetyreports from '../Components/Safetyreports'
import Safetytable from '../Components/Safetytable'
import Popupmodel from '../Components/Popupmodel'
const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Login />}/>
      <Route path="/reset-password" element={<Updatepassword />}/> 
      <Route path="/Otp" element={<Otp />}/>
      <Route path='/admin/*' element={<PrivateRoutes />}/> 
      <Route path='/profile' element={<Profiledata />}/> 
      <Route path='/social' element={<Socialdata />}/> 
      <Route path='/post' element={<Postdata />}/> 
      <Route path='/profile-info' element={<Profileinformation />} />
      <Route path='/edit' element={<Editprofile />}/> 
      <Route path='/safety-reports' element={<Safetyreports/>}/>
      <Route path='/safetable' element={< Safetytable/>} />
      <Route path='/popup' element={< Popupmodel />} />
    </Routes>
    
  )

}
export default AppRoutes
