import mongoose from "mongoose";
const userSchemea = mongoose.Schema({
    fullname: String,
    email:String,
    password:String,
    Registered:{
        default:false,
        required:true,
        type:Boolean
    },
    slotAlloacated:{
        default:false,
            required:true,
            type:Boolean
    }

})
const User = mongoose.model('User', userSchemea)
export default User;