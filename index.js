
const mongoose = require('mongoose')

const saveInDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");

    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });

    const ProductsModel= mongoose.model('products',ProductSchema);
    let data=new ProductsModel({name:"7T",price:38000,brand:"OnePlus",category:"Mobile"});
    let result= await data.save();
    console.log(result);

}

const updateInDB=async()=>{
    const Product =mongoose.model('products',ProductSchema);
    let data=await Product.updateOne(
        {name:"7T"},
        {
            $set:{price:700}
        }
    )
    console.log(data);


}

const deleteInDB=async()=>{
    const Product =mongoose.model('products',ProductSchema);
    let data= await Product.deleteOne({name:"m8"});
    console.log(data);
}

deleteInDB()