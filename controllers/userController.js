const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

//securepassword using bcryptjs
// const securePassword = async (password) => {
//   const passwordHash = await bcrypt.hash(password, 10);
//   console.log(passwordHash);
// };

// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    const isMath = await bcrypt.compare(password, user.password);
    console.log(isMath);
    if (isMath) {
      return res.status(200).json({
        success: true,
        user,
      });
    }
    return res.status(404).json({
      success: false,
      data: "password incorrect",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//register
const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newpass = await bcrypt.hash(password, 10);
    console.log(newpass);
    const newUser = await userModel.create({
      name,
      email,
      password: newpass,
    });
    return res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
module.exports = { loginController, registerController };
