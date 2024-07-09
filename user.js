const User = require('../model/user');

const user = async (req, res) => {
    try{
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            userName: req.body.userName,
            
        })
        console.log(newUser);
        await newUser.save();
        return res.status(201).json({message: 'User created successfully', newUser});
    }catch (error) {
        console.log("CREATE USER FAILED", error);
        return res.status(400).send("Error. Try again.")
    }
}

module.exports = {user}

