import React , {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import "./style.css"
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {adminSignin} from "../../../../api/api"
import {loginPending, loginSuccess, loginFail} from "../../../../Redux/userSlice/loginSlice";
import {useNavigate} from 'react-router-dom';
// import { getUserProfile } from './userAction' todo Admin Action;
const logo = "https://i.ibb.co/xfPrGPW/Logo.png"
const initialValue = {fullname:"", email: "", password:"", confirmPassword:""}
function Auth(props) {
    const dispatch = useDispatch();
    const navigate  = useNavigate()
    const  {isLoading, error} = useSelector(state=> state.login)
    const [formData, setFormData] =useState(initialValue)
  //  let user= JSON.parse(localStorage.getItem('LaunchPad'))
    async function handleSignIn(e){
      e.preventDefault()
     dispatch(loginPending())
     try {
      const isAuth =await adminSignin(formData);
      if(isAuth.data.error) throw new Error(isAuth.data.message)
      dispatch(loginSuccess())
    //   dispatch(getUserProfile(isAuth.data.result._id)) todo

      navigate("/")
     } catch (error) {
       dispatch(loginFail(error.message))
     }
      
    }
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <>
    
        <div id="adminAuthPage">
            <div className="form2 row d-flex justify-content-center  align-items-center">
                    <div className="col-12 col-sm-11 col-md-10 col-lg-8 py-1">
                    <img height="40px" src={logo} alt="LaunchPad Logo" />
      <h1>Admin Login</h1>
      {isLoading &&   <CircularProgress color="secondary" /> }
      {error &&   <Alert severity="warning">  {error}</Alert> }


      <form   id="form1">  
        <div className="form-row d-flex justify-content-center">
          <div className="col-lg-10 py-1">
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Email"
              className="form-control"
              id=""
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-center">
          <div className="col-lg-10 py-1">
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Password"
              className="form-control"
              id=""
            />
          </div>
        </div>

        <div className="form-row d-flex justify-content-center mb-2">
            <div className="col-lg-10 py-3 mb-4">
                     <button type="submit" onClick={handleSignIn} className="btn-grad"> Login </button>
              
                
            </div>
        </div>
      </form>
    </div>
  </div>
           
        </div>
        </>
    )
}

export default Auth