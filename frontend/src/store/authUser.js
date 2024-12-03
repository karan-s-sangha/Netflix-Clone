import axios from "axios"; // Import Axios for making HTTP requests to the API.
import toast from "react-hot-toast"; // Import toast notifications for user feedback.
import { create } from "zustand"; // Import Zustand to create the global state store.

// Create an authentication store using Zustand.
export const useAuthStore = create((set) => ({
    // Initial state properties for authentication.
    user: null, // Holds the currently authenticated user or `null` if no user is logged in.
    isSigningUp: false, // Tracks the loading state for the signup process.
    isLoggingIn: false, // Tracks the loading state for the login process.
    isLoggingOut: false, // Tracks the loading state for the logout process.
    isCheckingAuth: true, // Tracks whether the app is checking the user's authentication status.

    // Signup method for registering a new user.
    signup: async (credentials) => {
        set({ isSigningUp: true }); // Set the `isSigningUp` state to `true` (loading).
        try {
            // Send a POST request to the signup API with user credentials.
            const response = await axios.post("/api/v1/auth/signup", credentials);

            // Update the user state with the returned user data and stop the loading state.
            set({ user: response.data.user, isSigningUp: false });

            // Show a success toast notification.
            toast.success("Account created successfully");
        } catch (error) {
            // Show an error toast notification with a message from the server or a default message.
            toast.error(error.response?.data?.message || "Signup failed");

            // Reset the loading state and clear the user state.
            set({ isSigningUp: false, user: null });
        }
    },

    // Login method for authenticating an existing user.
    login: async (credentials) => {
        set({ isLoggingIn: true }); // Set the `isLoggingIn` state to `true` (loading).
        try {
            // Send a POST request to the login API with user credentials.
            const response = await axios.post("/api/v1/auth/login", credentials);

            // Update the user state with the returned user data and stop the loading state.
            set({ user: response.data.user, isLoggingIn: false });
        } catch (error) {
            // Reset the loading state and clear the user state.
            set({ isLoggingIn: false, user: null });

            // Show an error toast notification with a message from the server or a default message.
            toast.error(error.response?.data?.message || "Login failed");
        }
    },

    // Logout method for signing out the current user.
    logout: async () => {
        set({ isLoggingOut: true }); // Set the `isLoggingOut` state to `true` (loading).
        try {
            // Send a POST request to the logout API.
            await axios.post("/api/v1/auth/logout");

            // Clear the user state and stop the loading state.
            set({ user: null, isLoggingOut: false });

            // Show a success toast notification.
            toast.success("Logged out successfully");
        } catch (error) {
            // Stop the loading state.
            set({ isLoggingOut: false });

            // Show an error toast notification with a message from the server or a default message.
            toast.error(error.response?.data?.message || "Logout failed");
        }
    },

    // authCheck method for verifying the user's authentication status.
    authCheck: async () => {
        set({ isCheckingAuth: true }); // Set the `isCheckingAuth` state to `true` (loading).
        try {
            // Send a GET request to the authCheck API to verify the user's session.
            const response = await axios.get("/api/v1/auth/authCheck");

            // Update the user state with the returned user data and stop the loading state.
            set({ user: response.data.user, isCheckingAuth: false });
        } catch (error) {
            // Reset the user state and stop the loading state.
            set({ isCheckingAuth: false, user: null });

            // (Optional) Uncomment to show an error toast for failed auth checks.
            // toast.error(error.response?.data?.message || "An error occurred");
        }
    },
}));
