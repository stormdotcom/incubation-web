import mongoose from "mongoose";
const companySchemea = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    email: String,
    phone: String,
    // below feilds are discriptions which may contains more than 100 characters
    companyName: String, 
    background: String,
    compAndProd: String,
    probSolved: String,
    solution: String,
    valueForCustomers: String,
    competativeAdvantage: String,
    revenueModel: String,
    marketSize: String,
    marketingStrategy: String,
    typeofIncubation: String,
    bussinessProposal:String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    userId:new ObjectID,
})
const Company = mongoose.model('CompanyDetails', companySchemea)
export default Company;