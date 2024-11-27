import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
    try {
        // Extract email, password, and username from the request body.
        const { email, password, username } = req.body; 

        // Check if all required fields are provided.
        if (!email || !password || !username) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Validate email format using regex.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }

        // Ensure the password meets the minimum length requirement.
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
        }

        // Check if a user with the same email already exists.
        const existingUserByEmail = await User.findOne({ email: email });
        if (existingUserByEmail) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        // Check if a user with the same username already exists.
        const existingUserByUsername = await User.findOne({ username: username });
        if (existingUserByUsername) {
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        // Hash the password using bcryptjs for security.
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Assign a random profile picture.
        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        // Create a new user instance.
        const newUser = new User({
            email: email,
            password: hashedPassword,
            username: username,
            image: image
        });

        // Generate a JWT token and set it as a cookie.
        generateTokenAndSetCookie(newUser.id, res);

        // Save the new user to the database.
        await newUser.save();

        // Respond with the created user (excluding the password).
        res.status(201).json({
            success: true,
            user: {
                ...newUser.toObject(), // Convert the Mongoose document to a plain object.
                password: ""          // Exclude the password from the response.
            }
        });
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        // Extract email and password from the request body.

        // Check if all required fields are provided.
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Find the user by email.
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid credentials" });
        }

        // Compare the provided password with the hashed password in the database.
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(404).json({ success: false, message: "Invalid credentials" });
        }

        // Generate a JWT token and set it as a cookie.
        generateTokenAndSetCookie(user._id, res);

        // Respond with the logged-in user (excluding the password).
        res.status(200).json({
            success: true,
            user: {
                ...user._doc, // Access the raw user document.
                password: ""  // Exclude the password from the response.
            }
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function logout(req, res) {
    try {
        // Clear the JWT token from the cookies.
        res.clearCookie("jwt-netflix");

        // Respond with a success message.
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function authCheck(req, res) {
    try {
        // Respond with the authenticated user's details.
        res.status(200).json({ success: true, user: req.user });
    } catch (error) {
        console.log("Error in authCheck controller", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
