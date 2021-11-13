import mongoose from 'mongoose';
import Company from '../models/companyModel.js';
import Slot from '../models/slotModel.js';
import User from "../models/userModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllcompanyList= async(req, res)=>{
    res.setHeader('Content-Type', 'text/plain');

    try {
        await Company.find().then(existingUser=> res.status(200).json({existingUser}))
        .catch(err=> res.status(200).json({message:err.message, error:true}));
    }catch(err){
        return res.status(200).json({message:err.message, error:true})
    }
}


export const changePending= async(req, res)=>{
    const {id} = req.body
    res.setHeader('Content-Type', 'text/plain');

    try {
        await Company.findOneAndUpdate({_id:id}, {pending:true}).then(result=> res.status(200).json({message:"Success"}))
        .catch(err=> res.status(200).json({message:err.message, error:true}));
    }catch(err){
        return res.status(200).json({message:err.message, error:true})
    }
}

export const addSlots= async(req, res)=>{
    let {count} = req.body
    let numberof = count
    console.log(count)

    res.setHeader('Content-Type', 'text/plain');

    try {
        do {
            const result= await Slot.create({companyName:""}).then(resp=> res.status(200).json({message:"Success added", error:false}))
            .catch(err=> res.status(200).json({message:err.message, error:true}));
            numberof--;
        }while(numberof>=1)
        
  
    }catch(err){
         console.log(err.message)
    }
}

export const getAllSlots= async(req, res)=>{
    try {
            const result= await Slot.find().catch(err=> res.status(200).json({message:err.message, error:true}));
             res.status(200).json({slots:result})
    }catch(err){
        console.log(err.message)
    }
}
export const getAllUsers= async(req, res)=>{
    try {
            const result= await User.find().catch(err=> res.status(200).json({message:err.message, error:true}));
             res.status(200).json({user:result})
    }catch(err){
        console.log(err.message)
    }
}
export const setSlot= async(req, res)=>{
    const {userID, slotId}=req.body
    console.log(req.body)
    try {   
        // todo
        // set true in companysCollection
            let user= await User.findOneAndUpdate({_id:userID}, {slotAlloacated:true})
            if(user) {
                console.log("userAllocated "+user._id)
                await Slot.findOneAndUpdate({_id:slotId}, {available:false, userID:userID, companyName:user.fullname}).then(res1 => console.log("slotAllocated "+res1._id))
                .catch((err)=> {throw new Error(err.message)})
            } 
            else throw new Error("error fetching user")

    }catch(err){
        console.log(err.message)
    }
}
