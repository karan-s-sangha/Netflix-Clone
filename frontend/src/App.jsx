// Import components and functions from react-router-dom for routing
import { Navigate, Route, Routes } from "react-router-dom";

// Import various pages and components used in the app
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/Footer";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/404";

import { Toaster } from "react-hot-toast"; // Import a toast notification library to display notifications
import { useAuthStore } from "./store/authUser";// Import custom hooks and utilities.
import { useEffect } from "react";// Import React's `useEffect` hook for side effects
import { Loader } from "lucide-react";// Import a loader icon from the `lucide-react` library

function App() {
	const { user, isCheckingAuth, authCheck } = useAuthStore();// Use the custom authentication store to get user-related state and actions

	// Check user authentication status when the component mounts
	useEffect(() => {
		authCheck();
	}, [authCheck]);

	// Show a loading screen while the app is checking authentication
	if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					<Loader className='animate-spin text-red-600 size-10' />
				</div>
			</div>
		);
	}

	// Render the main application once authentication is checked
	return (
		<>
			{/* Define routes for the application */}
			<Routes>
				<Route path='/' element={<HomePage />} /> {/* Public route: Home page */}
				<Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} /> {/* Login page: Redirect to HomePage if the user is already logged in */}
				<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={"/"} />} /> {/* Sign-up page: Redirect to HomePage if the user is already logged in */}
				<Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />  {/* Watch page: Accessible only for logged-in users, else redirect to login */}
				<Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} /> {/* Search page: Accessible only for logged-in users */}		
				<Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} /> {/* Search history page: Accessible only for logged-in users */}
				<Route path='/*' element={<NotFoundPage />} /> {/* Catch-all route: Displays a 404 page for undefined routes */}
			</Routes>
			<Footer /> {/* Footer is displayed on all pages */}
			<Toaster /> {/* Toast notifications for showing messages */}
		</>
	);
}

export default App;
