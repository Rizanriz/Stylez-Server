const products = require("../models/productModel");


// /get all products
exports.getAllProducts = async (req,res)=>{
    console.log("Inside getallproductsController ");

    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

// veiw all products
exports.viewProduct = async (req,res)=>{
    console.log("Inside viewproductsController ");
    const {id} = req.params

    try {
        const singleProduct = await products.findOne({id})
        res.status(200).json(singleProduct)
    } catch (error) {
        res.status(401).json(error)
    }
}
