const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const fullToken = req.headers.authorization
        const token = fullToken?.split(' ')[1]
        console.log("Token Example: " + token)
        if (!token) return res.status(403).send("Access Denied")
        const decodedToken = jwt.verify(token, 'shhhh')
        console.log("🚀 ~ file: auth.middleware.js:10 ~ decodedToken:", decodedToken)
        req.user = decodedToken
        
        next ()

    } catch(err) {
        
        console.log(err)
        res.status(400).send("invalid token")
    }
    
}