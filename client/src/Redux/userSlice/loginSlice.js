import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router";
const initialState={
    isLoading: false,
    isAuth: false,
    error: ""
}
export const loginSlice =createSlice({
    name:"login",
    initialState,
    reducers:{
        loginPending: (state)=>{
            state.isLoading =true;
            state.isAuth= false;
            state.error=""
        },
        loginSuccess: (state, action)=>{
            state.isLoading =false
            localStorage.setItem('profile', JSON.stringify(action.payload))
            state.isAuth=true;
            state.error="";
        },
        loginFail:(state, action)=>{
            state.isLoading =false
            state.error=action.payload;
        },
        doLogout:(state, action)=>{
            state.isLoading =false;
            state.isAuth=false;
            state.error="";
            localStorage.removeItem("profile");
            Navigate("/auth")
        }
    }
})

export const {loginPending, loginSuccess, loginFail, doLogout} = loginSlice.actions;
export default loginSlice.reducer;