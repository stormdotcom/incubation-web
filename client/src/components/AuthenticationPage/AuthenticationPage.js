import React , {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import "./styles.css"
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {signin, signup} from "../../api/api";
// import {  getUserSuccess } from "../../Redux/userSlice/userSlice"
import { getUserProfile} from "../AuthenticationPage/userAction"
import {loginPending, loginSuccess, loginFail} from "../../Redux/userSlice/loginSlice";
import {useNavigate} from 'react-router-dom';
const logo = "https://i.ibb.co/xfPrGPW/Logo.png"
const initialValue = {fullname:"", email: "", password:"", confirmPassword:""}
function Auth() {
    const dispatch = useDispatch();
    const navigate  = useNavigate()
    const  {isLoading, error} = useSelector(state=> state.login)
    const [formData, setFormData] =useState(initialValue)
    const [toggle, setToggle] =useState(false)
    const toggleHandle = ()=>{
        setToggle((prevValue) => !prevValue)
        dispatch(loginFail(""))
    }
    async function handleSignIn(e){
      e.preventDefault()
     dispatch(loginPending())
     try {
      const isAuth =await signin(formData);
      if(isAuth.data?.error) throw new Error(isAuth.data.message)
      else {
        dispatch(loginSuccess(isAuth.data.token))
        navigate("/")
      }
     } catch (error) {
      
       dispatch(loginFail(error.message))
       navigate("/auth")
     }
      
    }
    async function handleSignUp(e){
      e.preventDefault()
      const isAuth =await signup(formData);
      if(isAuth.data?.error) {
       navigate("/auth")
       dispatch(loginFail(isAuth.data?.message))
     }
      else {
        dispatch(loginSuccess(isAuth.data.token))
        navigate("/")
      }
     }  
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return ( 
        <div id="authPage">
            <div className="form1s row d-flex justify-content-center  align-items-center">
                    <div className="col-12 col-sm-11 col-md-10 col-lg-8 py-1">
                    <img height="40px" src={logo} alt="LaunchPad Logo" />
      <h1> {toggle ? "Sign Up" : "Sign In" }</h1>
      {isLoading &&   <CircularProgress color="secondary" /> }
      {error &&   <Alert severity="warning">  {error}</Alert> }


      <form  action="/login" method="POST" id="form1">
      {toggle && 
            <div className="form-row d-flex justify-content-center">
            <div className="col-lg-10 py-1">
              <input
                type="name"
                onChange={handleChange}
                name="fullname"
                placeholder="Full Name"
                className="form-control"
                id=""
              />
            </div>
          </div>
      }
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
        {toggle && 
            <div className="form-row d-flex justify-content-center">
            <div className="col-lg-10 py-1">
              <input
                name="confirmPassword"
                onChange={handleChange}
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                id=""
              />
            </div>
          </div>
      }

        <div className="form-row d-flex justify-content-center mb-2">
            <div className="col-lg-10 py-3 mb-4">
                { toggle ?   <button type="submit" onClick={handleSignUp} className="btn-grad"> Sign Up {isLoading && <CircularProgress />} </button>
                    : <button type="submit" onClick={handleSignIn} className="btn-grad"> Login </button>
                }
              
                
            </div>
        </div>
      </form>
    </div>
 <div className="form-row d-flex justify-content-end  pt-1 mb1-4">
     
  {toggle ?   <p> Already have an account? <button className="btn-01" onClick={toggleHandle}> Sign In</button></p>
   :
      <p>  Don't have a account? <button className="btn-01" onClick={toggleHandle}>Register here</button></p> }
      
    </div>
      </div>     
        </div>
    )
}

export default Auth