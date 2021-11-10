import axios from 'axios';
import Promise, { reject, resolve } from "promise"
import ErrorPage from '../components/Home/ErrorPage/ErrorPage';
const url = 'http://localhost:4000/';

export const companyDetails = () => axios.get(url);

export const signin = (formData) =>{
    return new Promise (async(resolve, reject)=>{
        try {
          const response= await axios.post(url+"user-signin", formData);
         let id = response.data.result._id;
          resolve(response)
          
      if (response?.data?.status === "success") {
        sessionStorage.setItem("accessJWT", response.data.accessJWT);
        localStorage.setItem(
          "LaunchPad",
          JSON.stringify({ refreshJWT: response.data.refreshJWT, userID:id })
        )
      }

        } catch (error) {
           
            reject(error.message)
            
        }

        
    })

}
export const signup = (formData)=> {
    return new Promise (async(resolve, reject)=>{
        try{
        const response=await axios.post(url+"user-signup", formData)
          resolve(response)
        }catch(error){
            reject(error)
        }
    })
} 
export const fetchUser=(userId)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get(url, userId);
            console.log(result, "user herer")
            if(result) {
                reject( new Error("User not found"))
            }
            resolve(result)
        }catch(error){
           reject(error.message)
        }
    })
}