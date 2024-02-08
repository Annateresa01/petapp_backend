const mongoose=require("mongoose")
const petmodelschema=new mongoose.Schema(
    {
        petType:String,
        petBreed:String,
        petNo:String,
        image: {
            data: Buffer,  // Binary data type for storing the image
            contentType: String  // MIME type of the image
          }
    }
)
module.exports=mongoose.model("Pets",petmodelschema)