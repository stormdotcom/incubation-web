import React from 'react'
import IndexPage from "./IndexPage"
function RegistrationForm() {
    let user = null;
    return (

        <div className="container">
            { user.slotRegistered ? <IndexPage /> :
         <form>
        <div className="row  mb-5 pt-5">
            <h1 className="text-center mb-5">Registration</h1>
            {/* 1 */}
          <div className="col col-sm-12 col-xl-6">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">First name</label>
                 <input type="text" name="name" id="form6Example1" class="form-control" />
             </div>
          </div>
          <div className="col col-sm-12 col-xl-6">
             <div class="form-outline mt-4">
             <label class="form-label" for="form6Example1">Address</label>
            <input type="text" name="address" id="form6Example1" class="form-control" />
         </div>
          </div>
          {/* 2 */}
          <div className="col col-sm-12 col-xl-6">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">City</label>
                 <input type="text" name="city" id="form6Example1" class="form-control" />
             </div>
          </div>
          <div className="col col-sm-12 col-xl-6">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">State</label>
                 <input type="text" name="state" id="form6Example1" class="form-control" />

             </div>
          </div>
          {/*  */}
          <div className="col col-sm-12 col-xl-6">
                 <div class="form-outline mt-4">
                <label class="form-label" for="form6Example1">Email</label>
                <input type="email" name="email" id="form6Example1" class="form-control" />
             </div>
          </div>
          <div className="col col-sm-12 col-xl-6">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Phone</label>
                 <input type="text" name="phone" id="form6Example1" class="form-control" />
             </div>
          </div>
          <div className="col col-sm-12 col-xl-6">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Company Name</label>
                 <input type="text" name="companyName" id="form6Example1" class="form-control" />
             </div>
          </div>
          <div className="col col-sm-12 col-xl-6">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Company Logo</label>
                 <input type="file" name="logo" id="form6Example1" class="form-control" />    
             </div>
          </div>
          {/* Describe */}
          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Describe your team and background</label>
                 <textarea  name="background" rows="10" id="form6Example1" class="form-control" />
             </div>
             </div>

             <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Describe your Company and product</label>
                 <textarea  name="compAndProd" rows="4" id="form6Example1" class="form-control" />
             </div>
             </div>
             <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Describe the problem you are trying to solve</label>
                 <textarea   name="probSolved" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div>


          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Whats unique about your solution?</label>
                 <textarea   name="solution" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div>

          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Whats the value proposition for the customers?</label>
                 <textarea   name="valueForCustomers" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div>        

          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Whats the value proposition for the customers?</label>
                 <textarea   name="competitiveAdvantage" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div> 

          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Who are your competitors and what is your competitive advantages?</label>
                 <textarea   name="competitiveAdvantage" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div> 

          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Explain your revenue model?</label>
                 <textarea   name="revenueModel" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div> 

          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">What is the potential market size of the product?</label>
                 <textarea   name="marketSize" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div> 


          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">How do you market or plan to market your products and services?</label>
                 <textarea   name="marketingStrategy" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div>  

          <div className="col col-lg-12">
                 <div class="form-outline mt-4">
                 <label class="form-label" for="form6Example1">Type of Incubation needed</label>
                 <div class="form-check py-2">
                    <input class="form-check-input" value="PhysicalIncubation" type="radio" name="typeofIncubation" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                        Physical Incubation 
                        </label>
            </div>
                <div class="form-check py-2">
                <input class="form-check-input" value="VirtualIncubation" type="radio" name="typeofIncubation" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Virtual Incubation 
                    </label>
                    </div>
             </div>
            </div>  
            <div className="col col-lg-12">
                 <div className="form-outline mt-4">
                 <label className="form-label" for="form6Example1">Business Proposal <small> (proof of doc)</small></label>
                 <input  type="file" name="businessProposal" rows="4" id="form6Example1" class="form-control" />
             </div>
          </div> 
          <div className="col col-lg-12 p-3">
                 <div className="form-outline mt-4  d-flex justify-content-center align-item-center">
                 <button type="submit" className="btn btn-primary btn-block mb-4 px-3">Register a Slot</button>
             </div>
          </div> 
        </div>
        </form>
            }
      </div>
    )
}

export default RegistrationForm
