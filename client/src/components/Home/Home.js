import React, { useState } from 'react'
import Navbar from './NavBar/Navbar'
import SlotRegistrationForm from './RegistrationForm/RegistrationForm'
import Auth from '../AuthenticationPage/AuthenticationPage';
import {getUserPending, getUserSuccess, getUserFail} from "../../Redux/userSlice/userSlice";
import {useDispatch, useSelector} from "react-redux"
import IndexPage from './RegistrationForm/IndexPage';
function Home() {


    const isLogin=true
    return (
        <div>
            {isLogin ?   <IndexPage/> : <Auth   />}

        </div>
    )
}

export default Home
