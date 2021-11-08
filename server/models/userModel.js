import mongoose from "mongoose";
const userSchemea = mongoose.Schema({
    fullname: String,
    email:String,
    password:String,
    slotRegistered:Boolean
})
const User = mongoose.model('User', userSchemea)
export default User;