import { useState } from "react"; // React hook for managing component state.
import { Link } from "react-router-dom"; // React Router for navigation between routes.
import { useAuthStore } from "../store/authUser"; // Zustand store for managing authentication state.

const LoginPage = () => {
	// Local state for managing email and password inputs.
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Access the login function and isLoggingIn state from the authentication store.
	const { login, isLoggingIn } = useAuthStore();

	// Handle form submission by invoking the login function with the input data.
	const handleLogin = (e) => {
		e.preventDefault(); // Prevent default form submission behavior.
		login({ email, password }); // Call the login function from the auth store.
	};

	return (
		<div className="h-screen w-full hero-bg">
			{/* Page container */}
			{/* Tailwind CSS Classes:
				- `h-screen`: Sets the height to the full viewport height.
				- `w-full`: Sets the width to 100% of the viewport.
				- `hero-bg`: Custom class for the background styling.
			*/}

			{/* Header */}
			<header className="max-w-6xl mx-auto flex items-center justify-between p-4">
				<Link to={"/"}>
					<img src="/netflix-logo.png" alt="logo" className="w-52" />
					{/* Netflix logo */}
					{/* Tailwind CSS Classes:
						- `w-52`: Sets the width to 13rem (208px).
					*/}
				</Link>
			</header>

			{/* Login Form Container */}
			<div className="flex justify-center items-center mt-20 mx-3">
				<div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
					{/* Form Card */}
					{/* Tailwind CSS Classes:
						- `w-full`: Sets the width to 100% of the container.
						- `max-w-md`: Limits the maximum width to 28rem (448px).
						- `p-8`: Adds padding of 2rem (32px).
						- `space-y-6`: Adds vertical spacing of 1.5rem (24px) between child elements.
						- `bg-black/60`: Sets a semi-transparent black background.
						- `rounded-lg`: Applies large rounded corners (8px radius).
						- `shadow-md`: Adds a medium shadow for a raised appearance.
					*/}

					<h1 className="text-center text-white text-2xl font-bold mb-4">Login</h1>
					{/* Form Title */}
					{/* Tailwind CSS Classes:
						- `text-center`: Centers the text horizontally.
						- `text-white`: Sets the text color to white.
						- `text-2xl`: Sets the font size to 1.5rem (24px).
						- `font-bold`: Makes the text bold.
						- `mb-4`: Adds a bottom margin of 1rem (16px).
					*/}

					<form className="space-y-4" onSubmit={handleLogin}>
						{/* Login Form */}
						{/* Tailwind CSS Classes:
							- `space-y-4`: Adds vertical spacing of 1rem (16px) between child elements.
						*/}

						<div>
							<label htmlFor="email" className="text-sm font-medium text-gray-300 block">
								Email
							</label>
							<input
								type="email"
								className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="you@example.com"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								/* Controlled input: updates state on change. */
							/>
						</div>

						<div>
							<label htmlFor="password" className="text-sm font-medium text-gray-300 block">
								Password
							</label>
							<input
								type="password"
								className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="••••••••"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								/* Controlled input: updates state on change. */
							/>
						</div>

						<button
							className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
							disabled={isLoggingIn}
						>
							{/* Button */}
							{/* Tailwind CSS Classes:
								- `w-full`: Sets the width to 100%.
								- `py-2`: Adds vertical padding of 0.5rem (8px).
								- `bg-red-600`: Sets the background color to red.
								- `text-white`: Sets the text color to white.
								- `font-semibold`: Makes the text medium-bold.
								- `rounded-md`: Adds medium rounded corners (4px radius).
								- `hover:bg-red-700`: Changes the background color on hover.
							*/}
							{isLoggingIn ? "Loading..." : "Login"}
							{/* Show "Loading..." while the login process is in progress. */}
						</button>
					</form>

					<div className="text-center text-gray-400">
						{/* Link to Signup Page */}
						{/* Tailwind CSS Classes:
							- `text-center`: Centers the text.
							- `text-gray-400`: Sets the text color to light gray.
						*/}
						Don't have an account?{" "}
						<Link to={"/signup"} className="text-red-500 hover:underline">
							Sign Up
						</Link>
						{/* Link to the signup page */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage; // Export the component for use in routing.
