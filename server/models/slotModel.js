import mongoose from "mongoose";
const slotSchema = mongoose.Schema({
    companyName: {type:String, default:"empty"},
    userID:{type:String, default:"empty"},
    date: {
        type: Date,
        default: new Date(),
        required:true
    },
    available:{
        default:true,
        required:true,
        type:Boolean
    },
    slotPending:{
        default:false,
            required:true,
            type:Boolean
    }

})
const Slot = mongoose.model('Slot', slotSchema)
export default Slot;