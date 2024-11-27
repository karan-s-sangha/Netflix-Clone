// Import the Mongoose library to define a schema and interact with MongoDB.
import mongoose from "mongoose";

// Define the schema for the `User` model.
const userSchema = mongoose.Schema({
    // Field for the username, which must be unique and required.
    username: {
        type: String,   // Data type is String.
        required: true, // This field is mandatory.
        unique: true,   // Ensures no two users can have the same username.
    },

    // Field for the email address, which must be unique and required.
    email: {
        type: String,   // Data type is String.
        required: true, // This field is mandatory.
        unique: true,   // Ensures no two users can have the same email.
    },

    // Field for the hashed password, which is required.
    password: {
        type: String,   // Data type is String.
        required: true, // This field is mandatory.
    },

    // Optional field for the user's profile image, with a default value if not provided.
    image: {
        type: String,   // Data type is String.
        default: ""     // Default is an empty string.
    },

    // Field to store the user's search history.
    searchHistory: {
        type: Array,    // Data type is an Array.
        default: []     // Default is an empty array.
    }
});

// Create the `User` model based on the schema.
// This is the interface to interact with the `User` collection in MongoDB.
export const User = mongoose.model('User', userSchema);
