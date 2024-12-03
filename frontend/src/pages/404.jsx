import { Link } from "react-router-dom"; // Import `Link` from React Router for navigation.

const NotFoundPage = () => {
	return (
		<div
			className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
			/* Container for the 404 page */
			style={{ backgroundImage: `url('/404.png')` }}
			/* Inline style to set a background image */
		>
			{/* Navbar */}
			<header className="absolute top-0 left-0 p-4 bg-black w-full">
				{/* Tailwind CSS Classes:
					- `absolute top-0 left-0`: Positions the header at the top-left corner of the screen.
					- `p-4`: Adds padding of 1rem (16px).
					- `bg-black`: Sets a black background.
					- `w-full`: Makes the header span the full width of the screen.
				*/}
				<Link to={"/"}>
					<img src="/netflix-logo.png" alt="Netflix" className="h-8" />
					{/* Netflix logo */}
					{/* Tailwind CSS Classes:
						- `h-8`: Sets the height of the logo to 2rem (32px).
					*/}
				</Link>
			</header>

			{/* Main Content */}
			<main className="text-center error-page--content z-10">
				{/* Tailwind CSS Classes:
					- `text-center`: Centers the text horizontally.
					- `z-10`: Ensures the content is above the background image.
				*/}
				<h1 className="text-7xl font-semibold mb-4">Lost your way?</h1>
				{/* Error title */}
				{/* Tailwind CSS Classes:
					- `text-7xl`: Sets the font size to 4.5rem (72px).
					- `font-semibold`: Makes the text semi-bold.
					- `mb-4`: Adds a bottom margin of 1rem (16px).
				*/}

				<p className="mb-6 text-xl">
					Sorry, we can't find that page. You'll find lots to explore on the home page.
				</p>
				{/* Error description */}
				{/* Tailwind CSS Classes:
					- `mb-6`: Adds a bottom margin of 1.5rem (24px).
					- `text-xl`: Sets the font size to 1.25rem (20px).
				*/}

				<Link to={"/"} className="bg-white text-black py-2 px-4 rounded">
					Netflix Home
				</Link>
				{/* Button to navigate back to the home page */}
				{/* Tailwind CSS Classes:
					- `bg-white`: White background for the button.
					- `text-black`: Black text color.
					- `py-2 px-4`: Adds vertical padding of 0.5rem (8px) and horizontal padding of 1rem (16px).
					- `rounded`: Adds rounded corners to the button.
				*/}
			</main>
		</div>
	);
};

export default NotFoundPage; // Export the component for use in routing.
