import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_EXPIRES_IN = "1h";

const registerUser = async (req, res) => {
  try {
    const { username, email, password, todos } = req.body;
    if (!username || !email || !password || !todos) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //^ checking user already exist or not

    const existingUser = await User.findOne({ $or: [{ username, email }] });
    if (existingUser) {
      console.log(" Username or email already exists");

      return res
        .status(400)
        .json({ message: "Username or Email already exists" });
    }

    //Hash Pass
    const hashPassword = await bcrypt.hash(password, 10);

    // new User

    const newUser = new User({
      username,
      email,
      todos,
      password: hashPassword,
    });

    await newUser.save();
    console.log("User registered successfully:", newUser.email);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      todos: newUser.todos
    });
  } catch (error) {
    console.error("Registration Failed! Pls try some time later");
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//& Login user

const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if ((!username && !email) || !password) {
      console.log("Login fields required");
      return res.status(400).json({ 
        success: false,
        message: "Username or Email and password are required" 
      });
    }

    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }] 
    });
    
    if (!existingUser) {
      console.log("User not found:", username || email);
      return res.status(400).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }

    const matchedPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchedPassword) {
      console.log("Invalid password for:", existingUser.email);
      return res.status(400).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      }
    );

    console.log("Login successful for:", existingUser.email);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      }
    });

  } catch (error) {
    console.error("Login Failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Login failed. Please try again later.",
    });
  }
};

export { registerUser, loginUser };
