import mongoose from 'mongoose';
import Company from '../models/companyModel.js';
import User from '../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signin= async(req, res)=>{
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({ email});
        if(!existingUser) return res.status(404).json({message: "User not Found"});
        const isPassword = await bcrypt.compare(password, existingUser.password);
        if(!isPassword) return res.status(400).json({message: "Incorrect Password"});
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "secret", {expiresIn: "7d"});
        res.status(200).json({result: existingUser, token})
    }
    catch(err){
        res.status(500).json({message: "Something went wrong"})
    }
}
export const signup= async(req, res)=>{
    const {email, password, confirmPassword, fullname } = req.body;
    try {
        const existingUser = await User.findOne({ email});
        if(existingUser) return res.status(404).json({message: "User already exits, Please try other email"});
        if(password !== confirmPassword) return res.status(404).json({message: "Password mismatch, Try again"});

        const hashedPassword = await bcrypt.hash(password, 8);
        const result = await User.create({ email, password: hashedPassword, fullname:fullname, slotRegistered:false});
        const token = jwt.sign({email: result.email, id: result._id}, "secret", {expiresIn: "1h"});
        res.status(200).json({result, token})
    }
    catch(err){
        res.status(500).json({message: "Something went wrong"})
    }
}
export const companyDetails=async(req,res)=>{
    const id= req.session.user._id
    try {
            const companyDetails =await Company.find({_id:id});
            res.send(200).json(companyDetails)
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}