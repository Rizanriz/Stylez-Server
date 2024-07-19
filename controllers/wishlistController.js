const wishlist = require('../models/wishlistModel')

exports.addToWishlist = async (req,res) =>{
    const {id,title,price,description,category,image,rating} = req.body
    const userId = req.payload

    try {
        const existingProduct = await wishlist.findOne({id,userId})
        if (existingProduct) {
            res.status(406).json("Items already in wishlist!!")
        }else{
            const newProduct = new wishlist({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }   
    } catch (error) {
        res.status(406).json(error)
    }
}

exports.getWishlist = async (req,res)=>{
    const userId = req.payload
    try {
        const allProducts = await wishlist.find({userId})
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeWishlist = async (req,res)=>{
    const {id} = req.params
    try {
        const removeItem = await wishlist.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    } catch (error) {
        res.status(401).json(error)
    }
}