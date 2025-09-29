import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 
const JWT_SECRET= process.env.JWT_SECRET||"supersecretkey";

export async function signup(req, res) {
    try {
        const { name, email, password } = req.body;

        // check if user exists
        const exsitingUser = await User.findOne({ email });
        if (exsitingUser) return res.status(400).json({ error: "User already exists" });

        // hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.json({ message: "user Created" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
        // generate JWT
        const token = jwt.sign(
            {
                id:user._id,email:user.email
            },
            JWT_SECRET,
            {expiresIn:"1h"}
        );

       res.json({
      message: "Login Successful!",
      token, // ✅ send token
      user: { id: user._id, name: user.name, email: user.email }
    });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getUsers(req, res) {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: err.message });

    }
}