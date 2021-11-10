import { fetchUser } from "../../api/api"
import { getUserPending, getUserSuccess, getUserFail } from "../../Redux/userSlice/userSlice"
export const getUserProfile=(id)=> async (dispatch)=>{
    console.log(id)
    try {
        dispatch(getUserPending)
        const result = await fetchUser(id)
        if(result.user && result.user._id) dispatch(getUserSuccess(result.user))
        dispatch(getUserFail("User not found"))
    } catch (error) {
        
    }
}