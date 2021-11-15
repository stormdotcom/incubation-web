import React from 'react'
// import Auth from '../AuthenticationPage/AuthenticationPage';
import jwtDecode from 'jwt-decode';
import IndexPage from './IndexPage';
function Home() {
    const token = (JSON.parse(localStorage.getItem('profile')));
    let user =null
    if(token)  user = jwtDecode(token)
    return (
        <div>
        <IndexPage user={user}/>
        </div>
    )
}

export default Home
