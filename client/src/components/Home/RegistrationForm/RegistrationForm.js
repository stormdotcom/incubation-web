import React from 'react'
import "./style.css"
// import FileBase from "react-file-base64"
function RegistrationForm({changes, submit}) {
    return (
            <div className="container">
         <form method="POST">
        <div className="row  mb-5 pt-5">
            <h1 className="text-center mb-5">Registration</h1>
            {/* 1 */}
          <div className="col-12 col-sm-6 col-xl-6">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Full Name</label>
                 <input onChange={changes} type="text" min="3" max="100" name="name" id="form6Example1" className="form-control" />
             </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-6">
             <div className="form-outline mt-4">
             <label className="form-label" htmlFor="form6Example1">Address</label>
            <input onChange={changes} type="text" min="3" max="100" name="address" id="form6Example1" className="form-control" />
         </div>
          </div>
          {/* 2 */}
          <div className="col-12 col-sm-6 col-xl-6">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">City</label>
                 <input onChange={changes} type="text" name="city" min="3" max="100" id="form6Example1" className="form-control" />
             </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-6">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">State</label>
                 <input onChange={changes} type="text" min="3" max="100" name="state" id="form6Example1" className="form-control" />

             </div>
          </div>
          {/*  */}
          <div className="col-12 col-sm-6 col-xl-6">
                 <div className="form-outline mt-4">
                <label className="form-label" htmlFor="form6Example1">Email</label>
                <input onChange={changes} type="email" name="email" value="test" readOnly="readonly"  max="100" id="form6Example1" className="form-control" />
             </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-6">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Phone</label>
                 <input onChange={changes} type="tel" name="phone"min="10"  max="100" id="form6Example1" className="form-control" />
             </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-6">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Company Name</label>
                 <input type="text" onChange={changes} name="companyName" id="form6Example1" min="3" max="100" className="form-control" />
             </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-6">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Company Logo</label>
                 <br />
                    <input name="logo" type="file" accept=".jpeg, .jpg, .png"/>
             </div>
          </div>
          {/* Describe */}
          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Describe your team and background</label>
                 <textarea onChange={changes}  name="background" rows="10" min="3" max="100" id="form6Example1" className="form-control" />
             </div>
             </div>

             <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Describe your Company and product</label>
                 <textarea onChange={changes} name="compAndProd" rows="4" min="3" max="100" id="form6Example1" className="form-control" />
             </div>
             </div>
             <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Describe the problem you are trying to solve</label>
                 <textarea onChange={changes}  name="probSolved" rows="4" min="3" max="100" id="form6Example1" className="form-control" />
             </div>
          </div>


          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Whats unique about your solution?</label>
                 <textarea onChange={changes}  name="solution" rows="4" min="3" max="100" id="form6Example1" className="form-control" />
             </div>
          </div>

          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Whats the value proposition for the customers?</label>
                 <textarea onChange={changes}  name="valueForCustomers" min="3" max="100" rows="4" id="form6Example1" className="form-control" />
             </div>
          </div>        

          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Whats the value proposition for the customers?</label>
                 <textarea  onChange={changes} name="competitiveAdvantage" min="3" max="100" rows="4" id="form6Example1" className="form-control" />
             </div>
          </div> 

          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Who are your competitors and what is your competitive advantages?</label>
                 <textarea onChange={changes}  name="competitiveAdvantage" min="3" max="100" rows="4" id="form6Example1" className="form-control" />
             </div>
          </div> 

          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Explain your revenue model?</label>
                 <textarea onChange={changes}  name="revenueModel" rows="4" min="3" max="100" id="form6Example1" className="form-control" />
             </div>
          </div> 

          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">What is the potential market size of the product?</label>
                 <textarea onChange={changes}  name="marketSize" rows="4" min="3" max="100" id="form6Example1" className="form-control" />
             </div>
          </div> 


          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">How do you market or plan to market your products and services?</label>
                 <textarea onChange={changes}  name="marketingStrategy" min="3" max="100" rows="4" id="form6Example1" className="form-control" />
             </div>
          </div>  

          <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Type of Incubation needed</label>
                 <div className="form-check py-2">
                    <input onChange={changes} className="form-check-input" min="3" max="100" value="PhysicalIncubation" type="radio" name="typeofIncubation" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Physical Incubation 
                        </label>
            </div>
                <div className="form-check py-2">
                <input onChange={changes} className="form-check-input" min="3" max="100" value="VirtualIncubation" type="radio" name="typeofIncubation" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Virtual Incubation 
                    </label>
                    </div>
             </div>
            </div>  
            <div className="col-12 col-sm-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" htmlFor="form6Example1">Business Proposal <small> (Detailed documents)</small></label>
                 <br />
                     <input multiple name="businessProposal" type="file"  accept=".jpeg, .jpg, .png" />
             </div>
             </div>
          </div> 
          <div className="col-3 col-lg-12 p-3">
                 <div className="form-outline mt-4  d-flex justify-content-center align-item-center my-sm-auto">
                 <button type="submit" onClick={submit} className="btn-04 d-block mx-auto mb-4">Register </button>
             </div>
          </div> 
        </form>
        </div>
            
    )
}

export default RegistrationForm
