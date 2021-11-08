import React , {useState} from 'react'
import "./styles.css"
const logo = "https://i.ibb.co/xfPrGPW/Logo.png"
function Auth(props) {
    const [toggle, setToggle] =useState(true)
    const toggleHandle = (props)=>{
        setToggle((prevValue) => !prevValue)
    }
    return (
        <div id="authPage">
            <div className="form1s row d-flex justify-content-center  align-items-center">
                    <div className="col-12 col-sm-11 col-md-10 col-lg-8 py-1">
                    <img height="40px" src={logo} alt="LaunchPad Logo" />
      <h1> {toggle ? "Sign Up" : "Sign In" }</h1>

      <form  action="/login" method="POST" id="form1">
      {toggle && 
            <div className="form-row d-flex justify-content-center">
            <div className="col-lg-10 py-1">
              <input
                type="name"
                name="name"
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
                { toggle ?   <button type="submit" className="btn-grad"> Sign Up </button>
                    : <button type="submit" className="btn-grad"> Login </button>
                }
              
                
            </div>
        </div>
      </form>
    </div>
 <div classNameName="form-row d-flex justify-content-end  pt-1 mb1-4">
     
  {toggle ?   <p> Already have an account? <button className="btn-01" onClick={toggleHandle}> Sign In</button></p>
   :
      <p>  Don't have a account? <button className="btn-01" onClick={toggleHandle}>Register here</button></p> }
      
    </div>
  </div>
           
        </div>
    )
}

export default Auth