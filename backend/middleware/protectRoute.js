import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";

// Define a middleware function to protect routes that require authentication
export const protectRoute = async (req, res, next) => {
	try {
		// Retrieve the JWT token from the cookies sent with the request
		const token = req.cookies["jwt-netflix"];

		// If no token is found, return a 401 Unauthorized response with an error message
		if (!token) {
			return res
				.status(401)
				.json({ success: false, message: "Unauthorized - No Token Provided" });
		}

		// Decode and verify the token using the JWT secret key
		const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

		// If the token is invalid or verification fails, return a 401 Unauthorized response
		if (!decoded) {
			return res
				.status(401)
				.json({ success: false, message: "Unauthorized - Invalid Token" });
		}

		// Query the database to find the user by the `userId` stored in the decoded token
		// Exclude the password field from the user object using `.select("-password")`
		const user = await User.findById(decoded.userId).select("-password");

		// If no user is found with the given ID, return a 404 Not Found response
		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		// Attach the retrieved user object to the `req` object for access in subsequent middleware or route handlers
		req.user = user;

		// Call `next()` to pass control to the next middleware or route handler
		next();
	} catch (error) {
		// Log the error message for debugging purposes
		console.log("Error in protectRoute middleware: ", error.message);

		// If an error occurs, return a 500 Internal Server Error response with an error message
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};
