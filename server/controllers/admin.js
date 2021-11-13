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
    // const {count} = req.body

    res.setHeader('Content-Type', 'text/plain');

    try {
        let count=5;
        while(count>=1) {
            const result= await Slot.create({companyName:"empty"}).then(resp=> res.status(200).json({message:"Success added", error:false}))
            .catch(err=> res.status(200).json({message:err.message, error:true}));
            count--;
        }
        
  
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
    const {id, slotID}=req.body
    console.log(req.body)
    try {   
        // todo
        // set true in companysCollection
             await User.findOneAndUpdate({_id:id}, {slotAlloacated:true}).then((res)=>{
            }).catch(err=> res.status(200).json({message:err.message, error:true}));
            await Slot.findOneAndUpdate({_id:slotID}, {available:false, userID:id}).then(res => console.log(res))
    }catch(err){
        console.log(err.message)
    }
}
