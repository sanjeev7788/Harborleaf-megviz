import React from "react"
import Logo from "./Logo"
import './Styles/Updatepassword.css';
import { useNavigate } from "react-router-dom";
function Updatepassword(){
const navigate=useNavigate()
const handleUpdate=()=>{
  e.preventDefault()
  navigate('/')
}
const handleBack=(e)=>{
  e.preventDefault()
  navigate('/')
}
    return(

        <div className="container-fluid " style={{height:'100vh',overflowY:'hidden'}}>
        <Logo />
        <div className="row text-center text-white mt-5">
        <h3>ADMIN PANEL</h3>
        </div>
       
    <div className="row justify-content-center">
    <div className="col-md-6 d-flex justify-content-center">
      <div>
        <h4 className="text-center mt-4">Reset Password</h4>
        <form>
          
          <div className="mt-5 mb-3">
            <input type="password" className="form-control" id="password" placeholder="password"/>
         </div>
         <div className="mb-3">
            <input type="password" className="form-control" id="password" placeholder="Confirm password"/>
         </div>

          <button type="submit" className="btn btn-primary w-100" onClick={handleUpdate}>Update</button>
          <div className="mb-3 text-center text-white mt-3" onClick={handleBack}>
            <p className="noaccount">Go to login here <a href="#">Signin</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
        
      
       </div>

    )

}
export default Updatepassword