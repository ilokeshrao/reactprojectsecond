 const mongoose =require('mongoose')



  const productsSchema= mongoose.Schema({
    name:String,
    desc:String,
    mdesc:String,
    price:Number,
    img:String,
    quantity:Number,
    createdDate:{type:Date,default: new Date()},
    status:{type:String,default:'IN STOCK'}

 })




 module.exports = mongoose.model('products',productsSchema)