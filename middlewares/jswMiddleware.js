const jwt = require('jsonwebtoken')


const jwtMiddleware = (req,res,next) =>{ 

try {  
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
        const jwtResponce = jwt.verify(token,process.env.JWT_PASSWORD)
        req.payload = jwtResponce.userId
        next()
    }else{
        res.status(406).json("Autherisation failed.......Please login!!")
    }
} catch (error) {
    console.log(error); 
    res.status(404).json("Autherisation failed.......Please login!!")
}
}

module.exports = jwtMiddleware