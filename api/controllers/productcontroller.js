const Products = require('../models/products')


exports.addproducts = (req, res) => {
    try {
        const { name, desc, mdesc, price, qty } = req.body
        const filename = req.file.filename
        const record = new Products({ name: name, desc: desc, mdesc: desc, price: price, quantity: qty, img: filename })
        record.save()
        res.status(201).json({
            status: 201,
            message: "successfully Product has been added"
        })
    } catch (error) {
        res.status(400)({
            status: 400,
            message: error.message
        })
    }
}
exports.allproductdata = async (req, res) => {
    try {
        const record = await Products.find()
        res.status(200).json({
            apiData: record,
            status: 200,

        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        })

    }
}

exports.singledata = async (req, res) => {
    try {
        const id = req.params.id
        const record = await Products.findById(id)
        res.status(200).json({
            status: 200,
            apiData: record
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }

}
exports.productupdate=async(req,res)=>{
    try{
    const id  =req.params.id
    const {name ,desc,mdesc,price,qty,status}=req.body
    if(req.file){
    const filename =req.file.filename
    await Products.findByIdAndUpdate(id,{name:name,desc:desc,mdesc:mdesc,price:price,quantity:qty,status:status,img:filename})
    }else{
        await Products.findByIdAndUpdate(id,{name:name,desc:desc,mdesc:mdesc,price:price,quantity:qty,status:status})
 
    }
res.status(200).json({
    status:200,
    message:'successfull product has been updated'
})
    }catch(error){
        res.status(400).json({
            status:400,
            message:error.message
        })

    }
}
exports.stockdata=async(req,res)=>{
    try{
    const record=  await Products.find({status:"IN STOCK"})
    res.status(200).json({
        status:200,
        apiData:record
    })
    }catch(error){
        res.status(500).json({
            status:500,
            message:error.message
        })

    }
}
exports.cart=async(req,res)=>{
    try {
        
  
const{ids}=req.body
 const record = await Products.find({_id:{$in:ids}})
 res.status(200).json({
    status:200,
    apiData:record
 })
} catch (error) {
       res.status(500).json({
        status:500,
        message:error.message
       })
}
}


