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
            state.isLoading =false;
            state.user=action.payload
            state.error=""
        },
        getUserFail:(state, action)=>{
            state.isLoading =false
            state.error=action.payload;
            alert(state.error)
        },
        logoutUser:(state, action)=>{
            state.user={};
            state.isLoading=false;
            state.error= "";
        }
    }
})

export const {getUserPending, getUserSuccess, getUserFail, logoutUser} = userSlice.actions;
export default userSlice.reducer;