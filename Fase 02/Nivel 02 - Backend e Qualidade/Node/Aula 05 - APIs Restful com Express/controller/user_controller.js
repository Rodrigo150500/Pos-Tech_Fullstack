const User = require("../model/user_repository")

exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.getUserById = async (req, res) =>{
    try{
        const id = req.params.id
        const user = await User.findById(id)

        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.createUser = async(req, res) => {
    const {name, email, age} = req.body
    const user = new User({name, email, age})
    
    try{

        const newUser = await user.save()
        res.status(201).json(newUser)

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.updateUser = async(req, res) => {
    const id = req.params.id
    const {name, email, age} = req.body
    
    try{

        const user = await User.findById(id)
        
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        user.name = name
        user.email = email
        user.age = age

        const updateUser = await user.save()
        res.status(200).json(updateUser)

    }catch(err){
        res.status(400).json({message: err.message})
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.deleteOne();
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
