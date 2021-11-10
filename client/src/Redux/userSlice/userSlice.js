import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:{},
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
            state.error="";
        }
    }
})

export const {getUserPending, getUserSuccess, getUserFail} = userSlice.actions;
export default userSlice.reducer;