import { Link } from "react-router-dom"; // For navigation between routes.
import Navbar from "../../components/Navbar"; // Navbar component for navigation.
import { Info, Play } from "lucide-react"; // Icons for "Play" and "More Info" buttons.
import useGetTrendingContent from "../../hooks/useGetTrendingContent"; // Custom hook to fetch trending content.
import { MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "../../utils/constants.js"; // Constants for categories and image URLs.
import { useContentStore } from "../../store/content"; // Zustand store for managing content type.
import MovieSlider from "../../components/MovieSlider"; // Component for horizontal content sliders.
import { useState } from "react"; // React hook for managing local state.

const HomeScreen = () => {
	// Fetch trending content using a custom hook.
	const { trendingContent } = useGetTrendingContent();

	// Access the current content type (movie or TV) from the Zustand store.
	const { contentType } = useContentStore();

	// State for managing the loading status of the hero image.
	const [imgLoading, setImgLoading] = useState(true);

	// Display a loading shimmer effect until trending content is fetched.
	if (!trendingContent)
		return (
			<div className="h-screen text-white relative">
				{/* Tailwind Explanation:
					- `h-screen`: Sets the container height to match the full viewport height.
					- `text-white`: Makes the text color white for readability.
					- `relative`: Allows child elements to be positioned absolutely relative to this container.
				*/}
				<Navbar /> {/* Render the Navbar */}
				<div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer">
					{/* Tailwind Explanation:
						- `absolute top-0 left-0`: Positions this div at the top-left corner of its parent.
						- `w-full h-full`: Makes the div span the full width and height of the parent container.
						- `bg-black/70`: Adds a semi-transparent black background with 70% opacity.
						- `flex items-center justify-center`: Centers the shimmer loader within the div.
						- `-z-10`: Places the shimmer loader behind other content.
					*/}
				</div>
			</div>
		);

	return (
		<>
			{/* Hero Section */}
			<div className="relative h-screen text-white">
				{/* Tailwind Explanation:
					- `relative`: Makes the container a positioned ancestor for child elements.
					- `h-screen`: Ensures the hero section spans the full viewport height.
					- `text-white`: Makes the text color white for readability.
				*/}
				<Navbar /> {/* Render the Navbar */}

				{/* Loading shimmer for the hero image */}
				{imgLoading && (
					<div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10">
					</div>
				)}

				{/* Hero Image */}
				<img
					src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path} // Fetch hero image using the backdrop path.
					alt="Hero img"
					className="absolute top-0 left-0 w-full h-full object-cover -z-50"
					/* Tailwind Explanation:
						- `absolute top-0 left-0`: Positions the image at the top-left of the container.
						- `w-full h-full`: Makes the image span the full width and height of the container.
						- `object-cover`: Ensures the image covers the container while maintaining its aspect ratio.
						- `-z-50`: Places the image behind all other content.
					*/
					onLoad={() => {
						setImgLoading(false); // Remove shimmer effect once the image is loaded.
					}}
				/>

				{/* Semi-transparent overlay on the hero image */}
				<div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50" aria-hidden="true">
					{/* Tailwind Explanation:
						- Same as above, but with `bg-black/50` for 50% opacity.
					*/}
				</div>

				{/* Hero Content */}
				<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
					{/* Tailwind Explanation:
						- `absolute top-0 left-0 w-full h-full`: Positions the content to span the full hero section.
						- `flex flex-col`: Stacks child elements vertically.
						- `justify-center`: Centers the content vertically within the hero section.
						- `px-8 md:px-16 lg:px-32`: Adds responsive horizontal padding for small, medium, and large screens.
					*/}
					<div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10">
						{/* Tailwind Explanation:
							- `bg-gradient-to-b`: Creates a gradient from top to bottom.
							- `from-black via-transparent to-transparent`: Sets gradient colors and transitions.
						*/}
					</div>

					{/* Hero Text */}
					<div className="max-w-2xl">
						{/* Tailwind Explanation:
							- `max-w-2xl`: Limits the width of the content to 672px for better readability.
						*/}
						<h1 className="mt-4 text-6xl font-extrabold text-balance">
							{/* Tailwind Explanation:
								- `mt-4`: Adds a top margin of 1rem (16px).
								- `text-6xl`: Sets the font size to 3.75rem (60px).
								- `font-extrabold`: Applies extra-bold font weight.
							*/}
							{trendingContent?.title || trendingContent?.name}
						</h1>
						<p className="mt-2 text-lg">
							{/* Tailwind Explanation:
								- `mt-2`: Adds a top margin of 0.5rem (8px).
								- `text-lg`: Sets the font size to 1.125rem (18px).
							*/}
							{trendingContent?.release_date?.split("-")[0] || trendingContent?.first_air_date.split("-")[0]}{" "}
							| {trendingContent?.adult ? "18+" : "PG-13"}
						</p>

						<p className="mt-4 text-lg">
							{/* Tailwind Explanation:
								- Same as above.
							*/}
							{trendingContent?.overview.length > 200
								? trendingContent?.overview.slice(0, 200) + "..."
								: trendingContent?.overview}
						</p>
					</div>

					{/* Hero Buttons */}
					<div className="flex mt-8">
						{/* Tailwind Explanation:
							- `flex`: Aligns buttons horizontally.
							- `mt-8`: Adds a top margin of 2rem (32px).
						*/}
						<Link
							to={`/watch/${trendingContent?.id}`} // Navigate to the "Watch" page for the trending content.
							className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center"
						>
							{/* Tailwind Explanation:
								- `bg-white hover:bg-white/80`: Adds a white background with hover opacity transition.
								- `text-black font-bold`: Makes the button text black and bold.
								- `py-2 px-4`: Adds vertical padding of 0.5rem (8px) and horizontal padding of 1rem (16px).
								- `rounded`: Adds rounded corners.
								- `mr-4`: Adds right margin between buttons.
								- `flex items-center`: Aligns the icon and text horizontally.
							*/}
							<Play className="size-6 mr-2 fill-black" />
							Play
						</Link>

						<Link
							to={`/watch/${trendingContent?.id}`} // Navigate to the "More Info" page for the trending content.
							className="bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center"
						>
							{/* Similar Tailwind Explanation as above */}
							<Info className="size-6 mr-2" />
							More Info
						</Link>
					</div>
				</div>
			</div>

			{/* Content Sliders */}
			<div className="flex flex-col gap-10 bg-black py-10">
				{/* Tailwind Explanation:
					- `flex flex-col`: Stacks the sliders vertically.
					- `gap-10`: Adds a vertical gap of 2.5rem (40px) between sliders.
					- `bg-black py-10`: Adds a black background with vertical padding of 2.5rem (40px).
				*/}
				{contentType === "movie"
					? MOVIE_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)
					: TV_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)}
			</div>
		</>
	);
};

export default HomeScreen;
