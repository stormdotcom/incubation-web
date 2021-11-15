import React, {useEffect, useState} from "react";
import Navbar from "./NavBar/Navbar";
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import EventIcon from '@mui/icons-material/Event';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PaymentIcon from '@mui/icons-material/Payment';
import SlotAllocation from "./SlotAllocation/SlotAllocation";
import ViewApplication from "./ViewApplication/ViewApplication";
import ApplicationsList from "./AllList/AllList";
import Dashboard from "./DashBoard/Dashboard";
import { getAllcompanyList } from "../../../api/adminAPI";
import "./style.css";
function Admin() {

    const [toggleSelection, setSelection]=useState("dashboard");
    const [list, setList]=useState([])
    const handleSelection=(selection)=>{
      setSelection(selection)
    }

useEffect(()=>{
  getAllcompanyList().then((result)=> setList(prevValue=> [...prevValue,...result]))
 
}, [])
  return (

    <>
      <Navbar />
      <div className="adminMain">
        <div className="sidePanel">
                   {/*start  */}
          <div onClick={()=>handleSelection("dashboard")} className="eachSection">
          <div className="icons"><DashboardIcon style={{color: "#ffff"}} /> </div>
          <div className="sectionText"> <h6> Dashboards </h6> </div>
        </div>

        <div onClick={()=>handleSelection("applicationsList")} className="eachSection">
          <div className="icons"><PersonIcon style={{color: "#ffff"}} /> </div>
          <div className="sectionText"> <h6> Applicant List</h6> </div>
        </div>

        <div className="eachSection">
          <div onClick={()=> handleSelection("viewStatus")} className="icons"><TrendingFlatIcon style={{color: "#ffff"}} /> </div>
          <div className="sectionText"> <h6> Record Track</h6> </div>
        </div>

        <div onClick={()=>handleSelection("booking")} className="eachSection">
          <div className="icons"><ListAltIcon style={{color: "#ffff"}} /> </div>
          <div className="sectionText"> <h6> Booking Slot</h6> </div>
        </div>

        <div className="eachSection">
          <div className="icons"><EventIcon style={{color: "#ffff"}} /> </div>
          <div className="sectionText"> <h6> Schedule Events</h6> </div>
        </div>

        <div className="eachSection">
          <div className="icons"><OndemandVideoIcon style={{color: "#ffff"}} /> </div>
          <div className="sectionText"> <h6> Videos</h6> </div>
        </div>

        <div className="eachSection">
          <div className="icons"><PaymentIcon style={{color: "#ffff"}} /> </div>
          <div className="sectionText"> <h6> Payments </h6> </div>
        </div>

        {/* End */}
        </div>

   
        <div></div>
        <div className="dashboard">
       
        {toggleSelection ==="booking" && <SlotAllocation/>}
        {toggleSelection ==="view" && <ViewApplication/>}
        {toggleSelection ==="applicationsList" && <ApplicationsList applicationList={list} />}
        {toggleSelection ==="dashboard" && <Dashboard/>}
        </div>
      </div>
    </>
  );
}

export default Admin;
