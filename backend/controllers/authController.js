const User = require("../models/User")

// authController.js content
exports.login = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.findOne({ email, password })
        if (!user) {
            res.send({ "message": "User not found" })
        }
        const passMatch = await user.comparePassword(password)
        if (!passMatch) {
            res.send({ "message": "Invalid Credentials" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.send({ "message": "Login successful", "token": token })
    } catch (error) {
        res.send({ "message": "Something went wrong" })
    }
}
