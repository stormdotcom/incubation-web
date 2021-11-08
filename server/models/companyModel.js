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
    logo:String,
    background: String,
    compAndProd: String,
    probSolved: String,
    solution: String,
    valueForCustomers: String,
    competitiveAdvantage: String,
    revenueModel: String,
    marketSize: String,
    marketingStrategy: String,
    typeofIncubation: String,
    businessProposal:String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    userId:String,
})
const Company = mongoose.model('CompanyDetails', companySchemea)
export default Company;