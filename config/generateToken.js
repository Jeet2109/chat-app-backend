const jwt = require("jsonwebtoken")

// add your desired JWT_SECRET in .env file for e.g. MySEcRetKey
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
}

module.exports = generateToken