import { useState } from "react"; // React hook for managing component state.
import { Link } from "react-router-dom"; // React Router for navigation between routes.
import { useAuthStore } from "../store/authUser"; // Zustand store for managing authentication state.

const LoginPage = () => {
	// Local state for managing email and password inputs.
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showInfo, setShowInfo] = useState(false);
	

	// Access the login function and isLoggingIn state from the authentication store.
	const { login, isLoggingIn } = useAuthStore();

	// Handle form submission by invoking the login function with the input data.
	const handleLogin = (e) => {
		e.preventDefault(); // Prevent default form submission behavior.
		login({ email, password }); // Call the login function from the auth store.
	};

	return (
		<div className="bg-black/50 bg-blend-overlay bg-[url('/hero.jpg')] bg-left-top bg-no-repeat bg-cover h-screen md:bg-top">
			{/* Page container */}
			{/* Tailwind CSS Classes:
				- `h-screen`: Sets the height to the full viewport height.
				- `w-full`: Sets the width to 100% of the viewport.
				- `hero-bg`: Custom class for the background styling.
			*/}

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

			{/* Login Form Container */}
			<div className="flex justify-center items-center mt-20 mx-3">
				<div className="w-full max-w-md px-16 py-8 space-y-6 bg-black/70 rounded-lg shadow-md">
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

					<h1 className="text-left text-white text-3xl font-bold mb-4">Sign In</h1>
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
							{isLoggingIn ? "Loading..." : "Sign In"}
							{/* Show "Loading..." while the login process is in progress. */}
						</button>
					</form>

					<div className="text-left text-gray-400">
						New to Netflix?&nbsp; 
						<Link to={"/signup"} className="text-white font-bold hover:underline">
							Sign up now.
						</Link>
					</div>

					<div className="text-left text-sm text-gray-400">
						<p className="inline">
							This page is not protected by Google reCAPTCHA to ensure you're not a bot.&nbsp;
						</p>
						{!showInfo && (
							<button
								onClick={() => setShowInfo(true)}
								aria-expanded={showInfo}
								className="text-blue-500 hover:underline"
							>
								Learn more.
							</button>
						)}
						<br />
						<br />
						<p
							className={`transition-opacity duration-1000 ease-in-out ${
								showInfo ? "visible opacity-100" : "invisible opacity-0"
							}`}
						>
							The information collected by Google reCAPTCHA is subject to the&nbsp;
							<a
								href="https://policies.google.com/privacy"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline"
							>
								Privacy Policy
							</a>
							&nbsp;and&nbsp;
							<a
								href="https://policies.google.com/terms"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline"
							>
								Terms of Service
							</a>
							, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage; // Export the component for use in routing.
