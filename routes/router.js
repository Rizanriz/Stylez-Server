    const express = require("express")
    const { getAllProducts, viewProduct, deleteProduct, addProduct, updateProduct, getProductById } = require("../controllers/productController")
    const { register, login } = require("../controllers/userController")
    const { addToWishlist, getWishlist, removeWishlist } = require("../controllers/wishlistController")
    const { addToCart,getCart, removeCartItems,incrementCart,decrementCart, emptyCart } = require("../controllers/cartController")
    const jwtMiddleware = require('../middlewares/jswMiddleware')

    const router = new express.Router()

    router.get('/all-products',getAllProducts)

    router.get('/:id/viewproduct', getProductById);

    router.post('/newproduct',addProduct)

    router.get('/:id/view-product',viewProduct)

    router.delete('/:id/delete',deleteProduct)

    router.put('/:id/update',updateProduct)

    router.post('/register',register)

    router.post('/login',login)

    router.post('/wishlist',jwtMiddleware, addToWishlist)

    router.get('/getWishlist',jwtMiddleware, getWishlist)

    router.delete('/wishlist/:id/remove',jwtMiddleware, removeWishlist)

    router.post('/addToCart',jwtMiddleware, addToCart)

    router.get('/getCart',jwtMiddleware, getCart)

    router.delete('/cart/:id/remove',jwtMiddleware, removeCartItems)            

    router.get('/cart/:id/increment',jwtMiddleware,incrementCart )

    router.get('/cart/:id/decrement',jwtMiddleware,decrementCart )

    router.delete('/empty-cart',jwtMiddleware,emptyCart )



    module.exports = router