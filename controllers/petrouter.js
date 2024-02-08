const express=require("express")
const petmodel=require("../model/petmodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
let data=req.body
let pets=new petmodel(data)
let res=await pets.save()
res.json(
    {
        status:"Success"
    }
)

})

module.exports=router