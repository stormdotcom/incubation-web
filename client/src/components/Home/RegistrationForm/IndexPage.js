import * as React from 'react';
import "./style.css"
import video from "../../../images/LaunchPad.mp4"
import { useSelector} from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2'
import { Navigate } from 'react-router';
import Navbar from '../NavBar/Navbar';
export default function IndexPage() {
  const navigate = Navigate
  const  {isLoading, error, user} = useSelector(state=> state.user)
  return (
    <>
    <Navbar />
    <div className="video-container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <div className="caption">
    {isLoading &&   <CircularProgress color="secondary" /> }
    {error &&   <Alert severity="warning">  {error}</Alert> }
    {/* {!user?.slotRegistered &&   
      Swal.fire({
        title: 'Hi, ' +user.fullname,
        text: "You are not yet registered for slot?!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (!result.isConfirmed) {
          Swal.fire(
            'OK Then!',
            'Its delaying.',
            'Warning'
          )
        }
        else {
          navigate("/slotbooking")
        }
      }) */}
    {/* } */}
    </div>
 

    <div className="caption d-flex aligns-items-end justify-content-center">
      <button className="btn-04"> {user.slotRegistered ? "Book a Slot" : "Register a Company" }</button>
      <button className="btn-05"> {user.slotRegistered ? "Notify Me Later" :"Register Later"}</button>
    </div>
  </div>
  </>
  );
}