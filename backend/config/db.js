// Import the Mongoose library for interacting with MongoDB.
import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

// Asynchronous function to establish a connection to the MongoDB database.
export const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the URI from environment variables.
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);

        // Log a success message with the host name of the MongoDB server.
        console.log("MongoDB connected: " + conn.connection.host);
    } catch (error) {
        // Log an error message if the connection fails.
        console.error("Error connecting to MongoDB: " + error.message);

        // Exit the process with a failure code (1) to indicate an unrecoverable error.
        process.exit(1); // `1` indicates an error, `0` indicates success.
    }
};
