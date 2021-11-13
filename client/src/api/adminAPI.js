import axios from 'axios';
const API = axios.create({baseURL:'http://localhost:4000'});

export const getAllcompanyList =async () =>{
        try {
            const result =await API.get("/admin");
            if(!result) {
               throw new Error("Fetcing Error")
            }
            return result.data.existingUser
        }catch(error){
            return error.message
        }   
    
}


export const changePendingStatus =async (userID) =>{
    try {
        const result =await API.post("/admin/change-pending", {id:userID});
        if(!result) {
           throw new Error("Fetcing Error")
        }
        return result.data.existingUser
    }catch(error){
        return error.message
    }   

}

export const addSlots =async (count) =>{
    try {
        const result =await API.post("/admin/add-slot", {count:count});
        if(!result) {
           throw new Error("Fetcing Error")
        }
        return result.data.existingUser
    }catch(error){
        return error.message
    }   

}
export const getAllSlots =async (count) =>{
    try {
        const result =await API.get("/admin/get-slot");
        if(!result) {
           throw new Error("Error Creating Slot")
        }
        return result.data.slots
    }catch(error){
        return error.message
    }   

}
export const getAllusers =async (count) =>{
    try {
        const result =await API.get("/admin/get-alluser");
        if(!result) {
           throw new Error("Error Creating Slot")
        }
        return result.data.user
    }catch(error){
        return error.message
    }   

}
export const slotSelection =async (userID, slotId) =>{
    console.log(slotId)

    try {
        const result =await API.post("/admin/select-slot", {id:userID, slotID:slotId});
        if(!result) {
           throw new Error("Error Creating Slot")
        }
        return result.data.user
    }catch(error){
        return error.message
    }   

}