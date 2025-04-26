const express=require('express');
const Users=require('../models/users');

const signup=async(req ,res)=>{
    const {firstName,lastName,email,password}=req.body;
    try{
        const existingUser = await Users.findOne({email:email});
        if(existingUser){
            return res.status(400).send("User already present");
        }
        else{
            const newUser =new Users({
                firstName,
                lastName,
                email,
                password
            });
            await newUser.save();
            console.log("User added successfully");
            console.log(newUser);
            res.status(200).send("User Added Successfully");
            // res.json({islogedin:true});
        }
    }
    catch(err){
        console.error("Error during signup:", err);
        res.status(500).send("Error Adding User");
    }
    
}

const signin=async(req ,res)=>{
    const {email,password}=req.body;
    try{
        const existingUser = await Users.findOne({email:email});
        if(existingUser.password===password){
            res.json({islogedin:true});
            console.log("Loggin Successful")
        }
        else{
            res.send("Invalid access");
        }
    }
    catch(err){
        console.error("Error during signin:", err);
        res.status(500).send("Invalid User");
    }
}

const getusers=async(req,res)=>{
    const users = await Users.find().sort({ email: 1 });
    // console.log(users);
    res.send(users);
}

const deleteuser=async (req,res)=>{
    const {email}=req.body;
    try{
        const existingUser = await Users.findOne({email:email});
        if(existingUser){
            await Users.deleteOne({ email:email });
            console.log("Deletion Performed");

        }
        else{
            console.log("User not found");
            res.send("User Invaid");
        }

    }
    catch(e){
        console.error("Error during signin:", err);
    }
}

module.exports={signup,signin,getusers,deleteuser};