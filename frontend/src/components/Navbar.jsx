import { useState } from "react"; // Import `useState` for managing local component state.
import { Link } from "react-router-dom"; // Import `Link` for client-side navigation.
import { LogOut, Menu, Search } from "lucide-react"; // Import icons for the navbar.
import { useAuthStore } from "../store/authUser"; // Zustand store for managing user authentication.
import { useContentStore } from "../store/content"; // Zustand store for managing content type.

const Navbar = () => {
	// State for managing the visibility of the mobile menu.
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Access the `user` and `logout` functions from the authentication store.
	const { user, logout } = useAuthStore();

	// Toggle the mobile menu's visibility.
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	// Access the `setContentType` function to switch between movies and TV shows.
	const { setContentType } = useContentStore();

	return (
		<header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">
			{/* Navbar container */}
			{/* Tailwind CSS Classes:
				- `max-w-6xl`: Limits the maximum width to 1152px.
				- `mx-auto`: Centers the navbar horizontally.
				- `flex flex-wrap`: Enables Flexbox and allows wrapping for smaller screens.
				- `items-center`: Vertically centers child elements.
				- `justify-between`: Distributes items with space between them.
				- `p-4`: Adds padding of 1rem (16px).
				- `h-20`: Sets the height to 5rem (80px).
			*/}

			<div className="flex items-center gap-10 z-50">
				{/* Left section: Logo and desktop menu */}
				{/* Tailwind CSS Classes:
					- `flex`: Enables Flexbox.
					- `items-center`: Vertically aligns children.
					- `gap-10`: Adds horizontal spacing of 2.5rem (40px) between children.
					- `z-50`: Ensures this section is on top of other elements.
				*/}
				<Link to="/">
					<img src="/netflix-logo.png" alt="Netflix Logo" className="w-32 sm:w-40" />
					{/* Netflix logo */}
					{/* Tailwind CSS Classes:
						- `w-32`: Sets the width to 8rem (128px) on small screens.
						- `sm:w-40`: Sets the width to 10rem (160px) on medium screens and above.
					*/}
				</Link>

				{/* Desktop menu items */}
				<div className="hidden sm:flex gap-2 items-center">
					{/* Tailwind CSS Classes:
						- `hidden sm:flex`: Hides the menu on small screens, displays it on medium screens and above.
						- `gap-2`: Adds horizontal spacing of 0.5rem (8px) between children.
						- `items-center`: Vertically aligns children.
					*/}
					<Link to="/" className="hover:underline" onClick={() => setContentType("movie")}>
						Movies
					</Link>
					<Link to="/" className="hover:underline" onClick={() => setContentType("tv")}>
						Tv Shows
					</Link>
					<Link to="/history" className="hover:underline">
						Search History
					</Link>
				</div>
			</div>

			<div className="flex gap-2 items-center z-50">
				{/* Right section: Search, user avatar, logout button */}
				{/* Tailwind CSS Classes:
					- `flex`: Enables Flexbox.
					- `gap-2`: Adds horizontal spacing of 0.5rem (8px) between children.
					- `items-center`: Vertically aligns children.
					- `z-50`: Ensures this section is on top of other elements.
				*/}
				<Link to={"/search"}>
					<Search className="size-6 cursor-pointer" />
					{/* Search icon with a clickable pointer */}
				</Link>
				<img
					src={user.image} // User's avatar image.
					alt="Avatar"
					className="h-8 rounded cursor-pointer"
					/* Tailwind CSS Classes:
						- `h-8`: Sets the height to 2rem (32px).
						- `rounded`: Applies fully rounded corners (circle effect).
						- `cursor-pointer`: Changes the cursor to a pointer on hover.
					*/
				/>
				<LogOut className="size-6 cursor-pointer" onClick={logout} />
				{/* Logout icon with a clickable pointer */}
				<div className="sm:hidden">
					<Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
					{/* Hamburger menu icon for mobile screens */}
					{/* Tailwind CSS Classes:
						- `sm:hidden`: Hides the menu icon on medium screens and above.
					*/}
				</div>
			</div>

			{/* Mobile menu */}
			{isMobileMenuOpen && (
				<div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
					{/* Tailwind CSS Classes:
						- `w-full`: Sets the width to 100%.
						- `sm:hidden`: Displays the menu only on small screens.
						- `mt-4`: Adds a top margin of 1rem (16px).
						- `z-50`: Ensures the menu appears above other elements.
						- `bg-black`: Sets the background color to black.
						- `border border-gray-800`: Adds a dark gray border.
						- `rounded`: Applies rounded corners.
					*/}
					<Link to={"/"} className="block hover:underline p-2" onClick={toggleMobileMenu}>
						Movies
					</Link>
					<Link to={"/"} className="block hover:underline p-2" onClick={toggleMobileMenu}>
						Tv Shows
					</Link>
					<Link to={"/history"} className="block hover:underline p-2" onClick={toggleMobileMenu}>
						Search History
					</Link>
				</div>
			)}
		</header>
	);
};

export default Navbar; // Export the component for use in other parts of the application.
