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
		<div className="h-screen w-full hero-bg">
			{/* Root container with full-screen height and width */}
			{/* Tailwind Classes:
				- `h-screen`: Sets the height to 100% of the viewport.
				- `w-full`: Sets the width to 100% of the parent container.
				- `hero-bg`: Custom background style (likely defined elsewhere, e.g., gradient or image).
			*/}
			<header className="max-w-6xl mx-auto flex items-center justify-between p-4">
				{/* Header section for the logo */}
				{/* Tailwind Classes:
					- `max-w-6xl`: Restricts the maximum width to 6xl (1152px).
					- `mx-auto`: Horizontally centers the container.
					- `flex`: Enables Flexbox for alignment.
					- `items-center`: Vertically aligns children to the center.
					- `justify-between`: Distributes children with space between them.
					- `p-4`: Adds padding of 1rem (16px) on all sides.
				*/}
				<Link to={"/"}>
					<img src="/netflix-logo.png" alt="logo" className="w-52" />
					{/* Netflix logo */}
					{/* Tailwind Classes:
						- `w-52`: Sets the image width to 13rem (208px).
					*/}
				</Link>
			</header>

			<div className="flex justify-center items-center mt-20 mx-3">
				{/* Main container for the form */}
				{/* Tailwind Classes:
					- `flex`: Enables Flexbox for alignment.
					- `justify-center`: Horizontally centers child elements.
					- `items-center`: Vertically centers child elements.
					- `mt-20`: Adds top margin of 5rem (80px).
					- `mx-3`: Adds horizontal margin of 0.75rem (12px) on both sides.
				*/}
				<div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
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
					<h1 className="text-center text-white text-2xl font-bold mb-4">Sign Up</h1>
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
							<label htmlFor="email" className="text-sm font-medium text-gray-300 block">
								Email
							</label>
							{/* Label for the email input */}
							{/* Tailwind Classes:
								- `text-sm`: Sets the font size to 0.875rem (14px).
								- `font-medium`: Applies medium font weight.
								- `text-gray-300`: Sets the text color to light gray.
								- `block`: Displays the label as a block element.
							*/}
							<input
								type="email"
								className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="you@example.com"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{/* Email input field */}
							{/* Tailwind Classes:
								- `w-full`: Sets the input width to 100%.
								- `px-3`: Adds horizontal padding of 0.75rem (12px).
								- `py-2`: Adds vertical padding of 0.5rem (8px).
								- `mt-1`: Adds top margin of 0.25rem (4px).
								- `border border-gray-700`: Adds a border with dark gray color.
								- `rounded-md`: Adds medium border-radius (4px).
								- `bg-transparent`: Makes the background transparent.
								- `text-white`: Sets the text color to white.
								- `focus:outline-none`: Removes the default focus outline.
								- `focus:ring`: Adds a custom focus ring effect.
							*/}
						</div>

						<div>
							<label htmlFor="username" className="text-sm font-medium text-gray-300 block">
								Username
							</label>
							<input
								type="text"
								className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="johndoe"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							{/* Username input field - similar Tailwind classes as the email field */}
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
							/>
							{/* Password input field - similar Tailwind classes as the email field */}
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
