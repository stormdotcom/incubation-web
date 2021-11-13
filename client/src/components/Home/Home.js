import React, { useState, useEffect } from 'react'
import Auth from '../AuthenticationPage/AuthenticationPage';
import { useSelector} from "react-redux";

import IndexPage from './RegistrationForm/IndexPage';
import { Alert, CircularProgress } from '@mui/material';
function Home() {
    const [loggedin, setLogggedin] = useState(JSON.parse(localStorage.getItem('profile')));
    const { isLoading, error} = useSelector(state => state.user)
    useEffect(() => {
        setLogggedin(JSON.parse(localStorage.getItem('profile')))
        
    }, [loggedin])
    return (
        <div>
            {isLoading && CircularProgress}
            { error && <Alert> error</Alert> }
            {loggedin ?   <IndexPage/> : <Auth   />}

        </div>
    )
}

export default Home
