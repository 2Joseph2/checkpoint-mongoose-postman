const express = require('express')

const contactSchema = require('../model/contact')


exports.getALL = async(req,res) =>{

    try{
        const contacts = await contactSchema.find()
        res.status(200).json({msg:"all contacts: ", contacts})
    }catch(err){
        console.log(err)
    }
}

exports.adding = async(req,res) =>{
    try{
        const newContact = new contactSchema(req.body)
        await newContact.save()
        res.status(200).json({msg:"new contact added", newContact})
    }catch(err){
        console.log(err)
    }
}

exports.update = async(req,res) =>{
    try{
        const {id} = req.params
        const updatedContact = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:"updated contact"})
    }catch(err){
        console.log(err)
    }
}

exports.remove = async(req,res) =>{
    try{
        const {id} = req.params
        const deletedContact = await contactSchema.findByIdAndDelete(id)
        res.status(200).json({msg:"removed contact"})
    }catch(err){
        console.log(err)
    }
}