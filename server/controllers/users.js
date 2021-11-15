import mongoose from 'mongoose';
import Company from '../models/companyModel.js';
import User from '../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signin= async(req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    const {email, password} = req.body;
    if(!email || !password) return res.status(200).json({message: "Invalid Entry Please try again", error:true});
    try {
        const existingUser = await User.findOne({ email});
        if(!existingUser) return res.status(200).json({message: "User not Found", error:true});
        const isPassword = await bcrypt.compare(password, existingUser.password);
        if(!isPassword) return res.status(200).json({message: "Incorrect Password", error:true});
        const token = jwt.sign({email: existingUser.email, id: existingUser._id, fullname: existingUser.fullname }, "secret", {expiresIn: "1h"});
        res.status(200).json({result: existingUser, token})
    }
    catch(err){
        res.status(200).json({message: "Something went wrong ", error:true})
    }
}
export const signup= async(req, res)=>{
    const {email, password, confirmPassword, fullname } = req.body;
    if(!email || !password || !fullname) return res.status(200).json({message: "Empty input Please try again", error:true});
    try {
        const existingUser = await User.findOne({ email});
        if(existingUser) return res.status(200).json({message: "User already exists, Please try other email", error:true});
        if(password !== confirmPassword) return res.status(200).json({message: "Password mismatch, Try again", error:true});

        const hashedPassword = await bcrypt.hash(password, 8);
        const result = await User.create({ email, password: hashedPassword, fullname:fullname, slotRegistered:false});
        const token = jwt.sign({email: result.email, id: result._id, fullname:result.fullname}, "secret", {expiresIn: "1h"});
        res.status(200).json({result, token})
    }
    catch(err){
        console.log(err.message)
        res.status(200).json({message: "Something went wrong", error:true})
    }
}
export const fetchUser=async(req,res)=>{
    const {id}= req.params;
    try {
            const userDetails =await User.findOne({_id:id}).catch((err)=>console.log(err.message));
            if(!userDetails) res.status(200).json({message: "error fetching user", error: true})
            res.status(200).json(userDetails)
    } catch (error) {
        res.status(200).json({message: "Something went wrong", error: true})
    }
}
export const companyDetails=async(req,res)=>{
    
    let userId=req.body.userId
    try {   
    const {email} = req.body;
            // const userDetails =await Company.find({email:email});
            const companyDetails =await Company.create(req.body);
            console.log(userId)
            if(companyDetails) {
                res.status(200).json({message: "Successfuly registred", error: false})
            }   await User.findOneAndUpdate({_id:userId}, {Registered: true})
            res.status(200).json({message: "Error while registering", error: true})
    } catch (err) {
        console.log(err.message)
    }
}
export const getCurrentCompany=async(req, res)=>{
        let userID=req.params.id;
        await Company.findOne({userID:userID}).then((company)=> res.status(200).json(company))
        .catch((err)=> res.status(200).json({message:err.message}))
}