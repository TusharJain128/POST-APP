const userModel = require('../models/userModel')

exports.loginUser = async function (req, res) {
    try {
        let data = req.body
        let { email, password } = data

        let checkEmail = await userModel.findOne({ email: email })
        console.log(checkEmail);
        if (!checkEmail) {
            let userData = userModel.create(data)
            return res.status(200).send({ status: true, message: "Login successfully" })
        }
        else {
            if (checkEmail.password == password) {
                return res.status(200).send({ status: true, message: "Login successfully" })
            }
            else {
                return res.status(401).send({ status: false, message: "Please enter correct password" })
            }
        }
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}