import express from "express"; // Framework for building the server
import cookieParser from "cookie-parser"; // Middleware for parsing cookies
import path from "path"; // Node.js module for handling file paths

// Importing routes and utilities
import authRoutes from "./routes/auth.route.js";
import homeRoutes from "./routes/home.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
import { ENV_VARS } from "./config/envVars.js"; // Environment variables
import { connectDB } from "./config/db.js"; // Database connection
import { protectRoute } from "./middleware/protectRoute.js"; // Authentication middleware

const app = express(); // Create Express app
const PORT = ENV_VARS.PORT; // Get port from environment
const __dirname = path.resolve(); // Get current directory path

app.use(express.json()); // Middleware to parse JSON data in incoming request bodies. (Express)
app.use(cookieParser()); // Middleware to parse cookies in incoming requests. (Express)

// Route handlers
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/home", homeRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);


if (ENV_VARS.NODE_ENV === "production") { 
	app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from the frontend build directory. (Node/React)
	app.get("*", (req, res) => { // Handle all unmatched routes in production
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); // Send the React app's index.html file as a response. (Node/React)
	});
}

// Start server and connect to database
app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`);
	connectDB();
});
