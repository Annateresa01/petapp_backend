const express=require("express")
const petmodel=require("../model/petmodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
let data=req.body
let pets=new petmodel(data)
let result=await pets.save()
res.json(
    {
        status:"Success"
    }
)

})

router.get("/view",async(req,res)=>{
    let data=await petmodel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await petmodel.find(input)
    res.json(data)
    
})

module.exports=router