import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:{},
    id:"",
    isLoading: false,
    error: ""
}
export const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        getUserPending: async (state)=>{
            state.isLoading =true
        },
        getUserSuccess: async (state, action)=>{
            state=action.payload
        },
        getUserFail:(state, action)=>{
            console.log(action)
            state.error=action.payload;
            alert(state.error)
        },
        logoutUser:(state, action)=>{
            state.user=null;
        }
    }
})

export const {getUserPending, getUserSuccess, getUserFail, logoutUser} = userSlice.actions;
export default userSlice.reducer;