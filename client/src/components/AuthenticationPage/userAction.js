import { fetchUser } from "../../api/api"
import { getUserPending, getUserSuccess, getUserFail } from "../../Redux/userSlice/userSlice"
export const getUserProfile=(id)=> async (dispatch)=>{
    try {
        // dispatch(getUserPending)
        const result = await fetchUser(id)
        if(result?.user) dispatch(getUserSuccess(result.user))
    } catch (error) {
        dispatch(getUserFail(error.message))
    }
}