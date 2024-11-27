// Import the `dotenv` package, which loads environment variables from a `.env` file into `process.env`.
import dotenv from "dotenv";

// Configure dotenv to read and parse the `.env` file at the root of the project.
// reads the .env file and adds these variables to process.env.
dotenv.config();

export const ENV_VARS = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY
};