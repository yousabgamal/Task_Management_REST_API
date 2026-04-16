const jwt = require('jsonwebtoken');

const createToken = (payload) => {
    return token = jwt.sign(payload , process.env.SECRET_KEY , { expiresIn: '5s'});
};

const decodedToken = (token) => {
    return decoded = jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = {
    createToken,
    decodedToken
};
