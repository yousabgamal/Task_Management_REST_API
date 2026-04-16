const jwt = require('./jwt');

const tokenVerification = (req , res , next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if (!authHeader){
        return res.status(401).json({ message: "Token missing" });
    } else{
        const token = authHeader.split(' ')[1];
        try{
            const userData = jwt.decodedToken(token);
            next();
        } catch(err){
            res.status(401).json({message:'Invalid token'});
        }
    }
}