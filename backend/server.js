import express from "express"; // Framework for building the server
import cookieParser from "cookie-parser"; // Middleware for parsing cookies
import path from "path"; // Node.js module for handling file paths
import axios from "axios"; // HTTP client for making requests

import authRoutes from "./routes/auth.route.js";
import homeRoutes from "./routes/home.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js"; // Environment variables
import { connectDB } from "./config/db.js"; // Database connection
import { protectRoute } from "./middleware/protectRoute.js"; // Authentication middleware

const cron = import('node-cron');
const app = express(); // Create Express app
const PORT = ENV_VARS.PORT; // Get port from environment
const __dirname = path.resolve(); // Get current directory path

app.use(express.json()); // Middleware to parse JSON data
app.use(cookieParser()); // Middleware to parse cookies

// Route handlers
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/home", homeRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// Ping route for health checks
app.get('/ping', (req, res) => {
    res.status(200).send('Server is alive');
});

if (ENV_VARS.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    // Schedule a task to run every 5 minutes
    cron.schedule('*/14 * * * *', async () => {
        try {
            //const response = await axios.get('https://your-app-domain.com/ping');
			const response = await axios.get(`http://localhost:${PORT}/ping`);
            console.log('Ping successful:', response.status);
        } catch (error) {
            console.error('Ping failed:', error.message);
        }
    });
}

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectDB();
});
