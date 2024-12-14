import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import axios from "axios";
import cron from "node-cron";

import authRoutes from "./routes/auth.route.js";
import homeRoutes from "./routes/home.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

let baseUrl = ""; // Initialize the base URL variable

// Middleware to capture and set the base URL dynamically
app.use((req, res, next) => {
    if (!baseUrl) {
        const protocol = req.protocol; // HTTP or HTTPS
        const host = req.get('host'); // Hostname with port
        baseUrl = `${protocol}://${host}`;
        console.log(`Base URL set to: ${baseUrl}`);
    }
    next();
});

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
        if (!baseUrl) {
            console.error("Base URL is not set. Cron job skipped.");
            return;
        }

        try {
            const response = await axios.get(`${baseUrl}/ping`);
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
