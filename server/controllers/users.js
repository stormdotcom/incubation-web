import mongoose from 'mongoose';
import Company from '../models/companyModel';
export const getCurrentUser= async(req, res)=>{
    try {
        const user = await Company.find();
        res.send(200).json(user)
    }
}