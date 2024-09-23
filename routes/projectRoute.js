const express=require('express')

const router=express.Router();

const Projects=require('../models/projectModel')

router.get('/all',async(req,res)=>{

    try {
        const fetchedprojects = await Projects.find()
        res.json(fetchedprojects).status(200)
    } catch (error) {
        res.json(error).status(500)
        
    }
})

router.post('/add',async(req,res)=>{
    try {
        const newprojectdata=await Projects(req.body)
        const {title,desc}=newprojectdata
        if(!title || !desc){
            res.json({message:"Ttile & desc Required"}).status(500)
        }
        await Projects.create()
        res.json({message:"Added"}).status(201)

    } catch (error) {
        res.json(error).status(500)
    }
})