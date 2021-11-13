import axios from 'axios';
const API = axios.create({baseURL:'http://localhost:4000'});
const url = 'http://localhost:4000/'
// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// })


export const signin = (formData) =>{
    return new Promise (async(resolve, reject)=>{
        try {
          const response= await API.post("/user-signin", formData);
        //  let id = response.data.result._id;
          resolve(response)
          
      // if (response?.data?.status === "success") {
      //   sessionStorage.setItem("accessJWT", response.data.accessJWT);
      //   localStorage.setItem(
      //     "LaunchPad",
      //     JSON.stringify({ refreshJWT: response.data.refreshJWT, userID:id })
      //   )
      // }

        } catch (error) {
           
            reject(error.message)
            
        }

        
    })

}
export const signup = (formData)=> {
    return new Promise (async(resolve, reject)=>{
        try{
        const response=await API.post("/user-signup", formData)
          resolve(response)
        }catch(error){
            reject(error)
        }
    })
} 
export const fetchUser=(userId)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.post(url, {id:userId});
            if(result.data.error) {
                reject(result.data.message)
            }
            resolve(result)
        }catch(error){
            console.log(error)
           reject(error.message)
        }
    })
}

export const adminSignin = (formData) =>{
    return new Promise (async(resolve, reject)=>{
        try {
          const response= await API.post("/admin/signin", formData);
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

export const registerCompany=async(formData)=>{
            const result = await axios.post(url+"companyDetails", formData);
            if(!result.data.error) {
               console.log(result)
            }
            
    
}