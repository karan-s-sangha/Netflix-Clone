import { useAuthStore } from "../../store/authUser.js"; // Import the Zustand store for authentication.
import AuthScreen from "./AuthScreen"; // Import the unauthenticated screen.
import HomeScreen from "./HomeScreen"; // Import the authenticated screen.

const HomePage = () => {
	// Access the `user` state from the authentication store.
	const { user } = useAuthStore();

	// Conditionally render either the `HomeScreen` (for authenticated users) or the `AuthScreen` (for unauthenticated users).
	return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
	/* Explanation:
		- If `user` exists (authenticated), render the `HomeScreen`.
		- If `user` is null or undefined (not authenticated), render the `AuthScreen`.
	*/
};

export default HomePage; // Export the component for use in routing or as a parent component.
