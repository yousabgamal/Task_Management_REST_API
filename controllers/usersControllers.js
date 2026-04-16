const User = require('../schemas/userSchema');
const jwt = require('../middlewares/jwt');
const bcrypt = require('bcryptjs');

const register = async (req , res) => {
    try{
        const {fullName , email , password , role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullName:fullName,
            email:email,
            password:hashedPassword,
            role:role
        });
        newUser.token = jwt.createToken({email:newUser.email , id:newUser.id , role:newUser.role});
        await newUser.save();
        res.json({
                token: token,
                ['user data']: {
                    id: newUser._id,
                    fullName: newUser.fullName,
                    email: newUser.email,
                    role: newUser.role
                }
            });
    } catch(err){
        res.json({Error:err.message});
    }
};

const login = async (req , res) => {
    try{
        const {email , password} = req.body;
        if(!email || !password){
            res.status(400).json({message:'Both email and password should be written!!'})
        } else{
            const userData = await User.findOne({email});
            if(!userData){
                res.status(404).json({message:"User not found!!"});
            } else{
                const isPasswordtrue = await bcrypt.compare(password, userData.password);
                if(isPasswordtrue){
                    userData.token = jwt.createToken({email:userData.email , id:userData.id , role:userData.role});
                    await userData.save();
                    res.json({
                        token: token,
                        ['user data']: {
                            id: userData._id,
                            fullName: userData.fullName,
                            email: userData.email,
                            role: userData.role
                        }
                    });
                } else{
                    res.status(401).json({Error:'Password is incorrect!!'})
                }
            }
        }
    } catch(err){
        res.json({Error:err});
    }
};

module.exports = {
    register,
    login
}