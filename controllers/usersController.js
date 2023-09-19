const User = require("../models/users")

const registerNewUser = async(req,res) => {
    const {name , password, email } = req.body

    if(!name || !password || !email) return res.status(400).json({'message': "Username and Password required"})

    const duplicate= await User.findOne({ name: name }).exec()

    if(duplicate) return res.sendStatus(409)

    try {
        const newUser= await User.create({ name: name, password: password, email: email})
        console.log(newUser)
        res.status(201).json({ 'success': `New user ${newUser.name} created successfully`})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({ 'message' : err.message})
    }
    
}   


module.exports = { registerNewUser }