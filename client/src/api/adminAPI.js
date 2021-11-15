import axios from "axios";
import Promise from "promise"
const API = axios.create({ baseURL: "http://localhost:4000" });
const url ="http://localhost:4000";
export const adminSignin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API.post("/admin/signin", formData);
      let id = response.data.result._id;
      resolve(response);

      if (response?.data?.status === "success") {
        sessionStorage.setItem("accessJWT", response.data.accessJWT);
        localStorage.setItem(
          "LaunchPad",
          JSON.stringify({ refreshJWT: response.data.refreshJWT, userID: id })
        );
      }
    } catch (error) {
      reject(error.message);
    }
  });
};
export const getAllcompanyList = () => {
  return new Promise(async(resolve, reject)=>{
    const result = await axios.get(url);
    if(result) {
      resolve(result.data.companyList)
    }
    else reject(result.data.message)
  })
};

export const changePendingStatus = async (userID) => {
  try {
    const result = await API.post("/admin/change-pending", { id: userID });
    if (!result) {
      throw new Error("Fetcing Error");
    }
    return result.data.existingUser;
  } catch (error) {
    return error.message;
  }
};

export const addSlots = async (count) => {
  try {
    const result = await API.post("/admin/add-slot", { count: count });
    if (!result) {
      throw new Error("Fetcing Error");
    }
    return result.data.existingUser;
  } catch (error) {
    return error.message;
  }
};
export const getAllSlots =  () => {
 return new Promise(async (resolve, reject)=>{
    const result = await API.get("/admin/get-slot/all");
    if (result.data.slots.length >=1) resolve(result.data.slots)
    resolve([{companyName:''}]) 
  })
};
export const getAllusers =  (count) => {
  return new Promise(async(resolve, reject)=>{
    const result = await API.get("/admin/get-user/all");
    if(result.data.user) resolve(result.data.user)
    reject("error")
  })
};
export const slotSelection = async (userID, slotId) => {
  try {
    const result = await API.post("/admin/select-slot", { userID, slotId });
    if (!result) {
      throw new Error("Error Creating Slot");
    }
    return result.data.user;
  } catch (error) {
    return error.message;
  }
};

export const approveCompany = async (userID, email)=>{
  try {
    const result = await API.post("/approve/", {userID, email});
    if (!result) {
      throw new Error("Error updating  company");
    }
    
  } catch (error) {
    return error.message;
  }
}
