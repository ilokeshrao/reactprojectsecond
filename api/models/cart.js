  const mongoose=  require('mongoose')



 const cartSchema  = mongoose.Schema({
    name:String,
    qty:Number,
    price:Number,
    username:String
})




module.exports =mongoose.model('cart',cartSchema)