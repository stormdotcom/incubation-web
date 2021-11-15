import React, {useEffect, useState} from 'react';
import decode from "jwt-decode"
import video from "../../images/LaunchPad.mp4"
import Navbar from './NavBar/Navbar';
import { registerCompany, fetchUser } from '../../api/api';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import ViewStatus from './ViewStatus/ViewStatus';
let logo;


export default function IndexPage() {
let encodedData=JSON.parse(localStorage.getItem("profile"));
let usertoken = decode(encodedData)
let [alldocs, setAllDocs]=useState([])
let [click, setClick]=useState(false)
let [currentUser, setCurrentUser]=useState({})
let [selection, setSelection]=useState("home")
// get user details from each render
useEffect(()=>{
  // setting user details in user state
  fetchUser(usertoken).then((res)=> setCurrentUser(res.data)).catch((er)=>console.log(er))
  
  }, [click, selection])
let initialState={fullname:"", address:"", city:"", state:"",email:"",
phone:"", companyName:"", background:"", compAndProd:"", probSolved:"",
solution:"", valueForCustomers:"",competitiveAdvantage:"", revenueModel:"", marketSize:"",
typeofIncubation:"", businessProposal:"", userId:""}
let [formData, setFormData]=useState(initialState)


const handleSelection = (options)=>{
  setClick(prev=> !prev)
  setSelection(options)
}

const handleChange=(e)=>{ 
  setFormData({...formData, [e.target.name]: e.target.value})
}
const uploadLogo=(e)=>{
  logo=(e.target.files[0])
}
const handleSubmit=async (e)=>{
  e.preventDefault()
  formData.userId=currentUser._id
  const data = new FormData()
  data.append("file", logo)
  data.append("upload_preset", "incubationmanagement-lpad")
  data.append("cloud_name", "stormiscoming") 
  fetch("https://api.cloudinary.com/v1_1/stormiscoming/image/upload",{
    method:"post",
    body:data
  }).then((res)=> res.json()).then((res)=> {
    formData.logo=res.url
    console.log(res.url)
  })
  formData.businessProposal=alldocs;
   registerCompany(formData)
   setSelection("aftersubmit")

}



  return (
    <>
    <Navbar />
    {selection==="viewStatus" && <ViewStatus currentUser={currentUser}  setClick={setClick}/>}
    {selection==="register" && <RegistrationForm  changes={handleChange} uploadLogo={uploadLogo}
     submit={handleSubmit} currentUser={currentUser} alldocs={setAllDocs}/> }
    {selection==="home" && 
    <div className="video-container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <div className="caption">

    </div>
    {!currentUser?.Registered ?
    <div className="caption d-flex aligns-items-end justify-content-center">
      <button onClick={()=> handleSelection("register")} className="btn-04">  Register Company </button>
      <button onClick={()=>setClick(prev=> prev)} className="btn-05">Register Later</button>
       
    </div> :
    <div className="caption d-flex aligns-items-end justify-content-center">
       <button onClick={()=> handleSelection("viewStatus")} className="btn-04"> View Status </button>
      </div>
}
  </div>
}

{selection==="aftersubmit" && 
    <div className="video-container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <div className="caption">
    </div>
    <div className="caption d-flex aligns-items-end justify-content-center">
       <button onClick={()=> handleSelection("viewStatus")} className="btn-04"> View Status </button>
      </div>

  </div>
}


{ selection==="viewStatus" &&  <button className="btn btn-secondary position-absolute" style={{left:"100px",  bottom:"250px"}}  onClick={()=> handleSelection("home")}>Back </button>  }
 

  </>
  );
}