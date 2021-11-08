import React, { useState } from 'react'
import Navbar from './NavBar/Navbar'
import SlotRegistrationForm from './RegistrationForm/RegistrationForm'
import Auth from '../AuthenticationPage/AuthenticationPage'
function Home() {
    const [isLogin, setLogin] =useState(false)
    return (
        <div>
            {isLogin ? <> <Navbar />  <SlotRegistrationForm/> </> : <Auth   />}

        </div>
    )
}

export default Home
