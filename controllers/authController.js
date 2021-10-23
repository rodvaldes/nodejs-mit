const User =  require("../model/userModel")

const bcrypt = require("bcryptjs")

exports.signUp = async (req,res) => {
    const {username, password} = req.body
    try {
        const hashpassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({
            username,
            password: hashpassword,
        });
        res.status(201).json({
            status: "exito",
            data: {
                user: newUser,
            },
        });
    } catch (e) {
        res.status(401).json({
            status: "Fallo",
        });
    }
}

exports.login = async (req,res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username})

        if (!user) {
            res.status(404).json({
                status: "Fallo",
                message: "No existe el usuario."
            })
        }

        const isCorrect = await bcrypt.compare(password,user.password)

        if(isCorrect) {
            res.status(200).json({
                status: "Exito",
            })
        } else {
            res.status(400).json({
                status: "Fallo",
                message: "Username o password incorrectos"
            })
        }

    } catch (e) {
        res.status(401).json({
            status: "Fallo",
        });
    }

}