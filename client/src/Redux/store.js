import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "./userSlice/loginSlice"
import userReducer from "./userSlice/userSlice"
export default configureStore({
    reducer:{
        login: loginReducer,
        user:userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})