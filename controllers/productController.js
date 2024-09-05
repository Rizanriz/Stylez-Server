const products = require("../models/productModel");


const generateUniqueId = async () => {
    const lastProduct = await products.findOne().sort({ id: -1 }); // Find the product with the highest id
    return lastProduct ? lastProduct.id + 1 : 1; // If there's no product, start at 1
};

// add product
exports.addProduct = async (req, res) => {
    console.log("Inside addProductController");

    const { title, price, description, image,} = req.body;

    try {
        const newId = await generateUniqueId(); // Generate unique id

        const newProduct = new products({
            id: newId,
            title,
            price,
            description,
            image
        });

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
exports.deleteProduct = async (req, res) => {
    console.log("Inside deleteProductController");
    const { id } = req.params;

    try {
        const deletedProduct = await products.findByIdAndDelete(id); 
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json(error);
    }
};
