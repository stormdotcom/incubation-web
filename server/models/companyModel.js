import mongoose from "mongoose";
const companySchemea = mongoose.Schema({
    name: {type:String, default:"defaultValue"},
    address: {type:String,  default:"defaultValue"},
    city: {type:String,  default:"defaultValue"},
    state: {type:String,  default:"defaultValue"},
    email: {type:String},
    phone: {type:String,  default:"defaultValue"},
    // below feilds are discriptions which may contains more than 100 characters
    companyName: {type:String}, 
    logo:{type:String},
    background: {type:String},
    compAndProd: {type:String},
    probSolved:  {type:String},
    solution: {type:String},
    valueForCustomers: {type:String},
    competitiveAdvantage:  {type:String},
    revenueModel:  {type:String},
    marketSize:  {type:String},
    marketingStrategy:  {type:String},
    typeofIncubation:  {type:String},
    businessProposal: {type:String},
    createdAt: {
        type: Date,
        default: new Date()
    },
    userId:String,
    approved:{
        type: Boolean,
        default: false
    },
    allocated:{
        type: Boolean,
        default: false
    },
    pending:{
        type: Boolean,
        default: false
    }
})
const Company = mongoose.model('CompanyDetails', companySchemea)
export default Company;