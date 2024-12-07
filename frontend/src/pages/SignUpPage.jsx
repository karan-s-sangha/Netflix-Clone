import { useState } from "react"; // Import React's `useState` hook for managing state variables.
import { Link } from "react-router-dom"; // Import `Link` from React Router for navigation without full page reloads.
import { useAuthStore } from "../store/authUser"; // Import `useAuthStore` to access authentication-related state and functions.

// Define the `SignUpPage` functional component.
const SignUpPage = () => {
	// Extract query parameters from the URL to prefill the email field (if provided).
	const { searchParams } = new URL(document.location); // Access the browser's URL.
	const emailValue = searchParams.get("email"); // Extract the "email" query parameter.

	// State variables for the form inputs.
	const [email, setEmail] = useState(emailValue || ""); // Prefill email if found in URL.
	const [username, setUsername] = useState(""); // State for the username input.
	const [password, setPassword] = useState(""); // State for the password input.

	// Destructure `signup` (function to handle signup) and `isSigningUp` (loading state) from the authentication store.
	const { signup, isSigningUp } = useAuthStore();

	// Function to handle the signup form submission.
	const handleSignUp = (e) => {
		e.preventDefault(); // Prevent the default form submission behavior (page reload).
		signup({ email, username, password }); // Call the signup function with user inputs.
	};

	return (
		<div className="bg-black/50 bg-blend-overlay bg-[url('/hero.jpg')] bg-left-top bg-no-repeat bg-cover h-screen md:bg-top">
		{/* Header */}
		<header className="max-w-7xl mx-auto flex items-center justify-between p-5">
				<Link to={"/"}>
					<img src="/netflix-logo.png" alt="logo" className="w-40 ml-9" />
					{/* Netflix logo */}
					{/* Tailwind CSS Classes:
						- `w-52`: Sets the width to 13rem (208px).
					*/}
				</Link>
			</header>

			<div className="flex justify-center items-center mt-20 mx-3">
				<div className="w-full max-w-md px-16 py-8 space-y-6 bg-black/70 rounded-lg shadow-md">
				{/* Form container with background, spacing, and rounded corners */}
					{/* Tailwind Classes:
						- `w-full`: Sets the width to 100% of the parent container.
						- `max-w-md`: Restricts maximum width to `md` (768px).
						- `p-8`: Adds padding of 2rem (32px) on all sides.
						- `space-y-6`: Adds vertical spacing of 1.5rem (24px) between child elements.
						- `bg-black/60`: Sets the background color to black with 60% opacity.
						- `rounded-lg`: Adds large border-radius (8px) for rounded corners.
						- `shadow-md`: Applies a medium shadow for an elevated appearance.
					*/}
					<h1 className="text-left text-white text-3xl font-bold mb-4">Sign Up</h1>
					{/* Form header */}
					{/* Tailwind Classes:
						- `text-center`: Centers the text horizontally.
						- `text-white`: Sets the text color to white.
						- `text-2xl`: Sets the font size to 1.5rem (24px).
						- `font-bold`: Applies bold font weight.
						- `mb-4`: Adds a bottom margin of 1rem (16px).
					*/}

					<form className="space-y-4" onSubmit={handleSignUp}>
						{/* Signup form */}
						{/* Tailwind Classes:
							- `space-y-4`: Adds vertical spacing of 1rem (16px) between child elements.
						*/}
						<div>
							<input
								type="email"
								className="w-full h-14 px-3 py-2 mt-1 border border-[#808080] rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="Email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								/* Controlled input: updates state on change. */
							/>
						</div>
						<div>
							<input
								type="text"
								className="w-full h-14 px-3 py-2 mt-1 border border-[#808080] rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="Username"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								/* Controlled input: updates state on change. */
							/>
						</div>

						<div>
							<input
								type="password"
								className="w-full h-14 px-3 py-2 mt-1 border border-[#808080] rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="Password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								/* Controlled input: updates state on change. */
							/>
						</div>

						<button
							className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
							disabled={isSigningUp}
						>
							{isSigningUp ? "Loading..." : "Sign Up"}
						</button>
						{/* Submit button */}
						{/* Tailwind Classes:
							- `w-full`: Sets the button width to 100%.
							- `py-2`: Adds vertical padding of 0.5rem (8px).
							- `bg-red-600`: Sets the background color to medium red.
							- `text-white`: Sets the text color to white.
							- `font-semibold`: Applies semi-bold font weight.
							- `rounded-md`: Adds medium border-radius (4px).
							- `hover:bg-red-700`: Changes the background color to dark red on hover.
						*/}
					</form>

					<div className="text-center text-gray-400">
						Already a member?{" "}
						<Link to={"/login"} className="text-red-500 hover:underline">
							Sign in
						</Link>
					</div>
					{/* Link to the sign-in page */}
					{/* Tailwind Classes:
						- `text-center`: Centers the text horizontally.
						- `text-gray-400`: Sets the text color to light gray.
						- `text-red-500`: Sets the link color to bright red.
						- `hover:underline`: Adds an underline on hover.
					*/}
				</div>
			</div>
		</div>
	);
};

// Export the `SignUpPage` component for use in the app.
export default SignUpPage;
