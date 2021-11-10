import React from 'react'
import { Link} from "react-router-dom";
import "./styles.css"
import { useLocation } from 'react-router-dom'
function ErrorPage() {
    const location = useLocation()
    const logo = "https://i.ibb.co/xfPrGPW/Logo.png"
    const  mailto="mailto:ajmal@launchpad.com"
    return (
        <div className="container">
        <div className="row error-page">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Requested page not found!</h2>
                    <div className="error-details py-4">
                        Sorry, an error has occured for <span className="text-danger bold"> {location.pathname}</span> 
                    </div>
                    <div className="error-actions d-flex justify-content-center  mt-5">
                        <Link to="/" className="btn btn-secondary"><span className="glyphicon glyphicon-home"></span>
                            Take Me Home </Link>
                            <Link to="/#home" onClick={(e)=> {
                                window.location = mailto; 
                                e.preventDefault();
                                }} 
                                className="btn btn-primary"><span > <img src={logo} alt="logo" height="20px"/> </span> Contact Support </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ErrorPage
