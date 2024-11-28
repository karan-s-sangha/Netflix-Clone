// Import the `jsonwebtoken` library for creating and verifying JWTs.
import jwt from "jsonwebtoken";

// Import environment variables (e.g., JWT secret and environment) from the configuration file.
import { ENV_VARS } from "../config/envVars.js";

/**
 * Generates a JWT token for the user and sets it as an HTTP-only cookie in the response.
 * 
 * @param {string} userId - The unique identifier of the user.
 * @param {object} res - The response object provided by Express.js.
 * @returns {string} The generated JWT token.
 */
export const generateTokenAndSetCookie = (userId, res) => {
    // Create a JWT token with the user's ID as the payload.
    const token = jwt.sign(
        { userId }, // Payload containing the user ID.
        ENV_VARS.JWT_SECRET, // Secret key to sign the token.
        { expiresIn: '15d' } // Token expiration time (15 days).
    );

    // Set the JWT token as an HTTP-only cookie in the response.
    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie lifespan (15 days in milliseconds).
        httpOnly: true,                  // Prevents JavaScript access to the cookie, mitigating XSS attacks.
        sameSite: "strict",              // Restricts the cookie to same-origin requests, preventing CSRF(cross site request forgery) attacks.
        secure: ENV_VARS.NODE_ENV !== "development" // Ensures cookies are sent only over HTTPS in production.
    });

    // Return the generated token for potential further use.
    return token;
};
