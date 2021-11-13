import React, {useEffect, useState} from 'react';
import "./style.css"
import video from "../../../images/LaunchPad.mp4"
import Navbar from '../NavBar/Navbar';
import { registerCompany } from '../../../api/api';
import RegistrationForm from './RegistrationForm';
import ViewStatus from '../ViewStatus/ViewStatus';
import {useNavigate} from 'react-router-dom';
export default function IndexPage() {
  const navigate = useNavigate();
let user={
  Registered:false
}
let initialState={name:"", address:"", city:"", state:"",email:"",
phone:"", companyName:"", logo:"", background:"", compAndProd:"", probSolved:"",
solution:"", valueForCustomers:"",competitiveAdvantage:"", revenueModel:"", marketSize:"",
typeofIncubation:"", businessProposal:""
}
let [formData, setFormData]=useState(initialState)
let [selection, setSelection]=useState("home")
const handleSelection = (options)=>{
  setSelection(options)
}
const handleChange=(e)=>{
  console.log(formData.companyName)
  setFormData({...formData, [e.target.name]: e.target.value})
}

const handleSubmit=async (e)=>{
  e.preventDefault()
  user.Registered=true;
   registerCompany(formData)
   setSelection("home")

}

  return (
    <>
    <Navbar />
    {selection==="viewStatus" && <ViewStatus />}
    {selection==="register" && <RegistrationForm changes={handleChange} submit={handleSubmit} /> }
    {selection==="home" && 
    <div className="video-container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <div className="caption">
{/*     
       {!info.slotRegistered &&  

 Swal.fire({
   icon: 'error',
   title: 'Error',
   text: "Something error fetching user info",
 })
    } */}
    </div>
    {!user.Registered ?
    <div className="caption d-flex aligns-items-end justify-content-center">
      <button onClick={()=> handleSelection("register")} className="btn-04">  Register a Company </button>
      <button className="btn-05">Register Later</button>
       
    </div> :
    <div className="caption d-flex aligns-items-end justify-content-center">
       <button onClick={()=> handleSelection("viewStatus")} className="btn-04"> View Status </button>
      </div>
}
  </div>
}
{ selection==="viewStatus" &&  <button className="btn btn-secondary position-absolute" style={{left:"100px",  bottom:"250px"}}  onClick={()=> handleSelection("home")}>Back </button>  }
 

  </>
  );
}