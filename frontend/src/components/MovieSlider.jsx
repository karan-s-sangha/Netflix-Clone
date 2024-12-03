import { useEffect, useRef, useState } from "react"; // React hooks for state, refs, and lifecycle.
import { useContentStore } from "../store/content"; // Zustand store for managing the content type.
import axios from "axios"; // Axios for making API requests.
import { Link } from "react-router-dom"; // React Router for navigation.
import { SMALL_IMG_BASE_URL } from "../utils/constants"; // Base URL for small-sized images.
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for navigation arrows.

const MovieSlider = ({ category }) => {
	// Access the content type (movie or TV) from the Zustand store.
	const { contentType } = useContentStore();

	// State to store the fetched content.
	const [content, setContent] = useState([]);

	// State to control the visibility of navigation arrows.
	const [showArrows, setShowArrows] = useState(false);

	// Ref for the slider container to handle horizontal scrolling.
	const sliderRef = useRef(null);

	// Format the category name for display (e.g., "now_playing" -> "Now playing").
	const formattedCategoryName =
		category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);

	// Format the content type for display (e.g., "movie" -> "Movies").
	const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

	// Fetch content when `contentType` or `category` changes.
	useEffect(() => {
		const getContent = async () => {
			// API call to fetch content based on content type and category.
			const res = await axios.get(`/api/v1/${contentType}/${category}`);
			setContent(res.data.content); // Update the content state with the API response.
		};

		getContent(); // Call the function to fetch content.
	}, [contentType, category]); // Dependencies: refetch when these change.

	// Function to scroll the slider left.
	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
		}
	};

	// Function to scroll the slider right.
	const scrollRight = () => {
		sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
	};

	return (
		<div
			className="bg-black text-white relative px-5 md:px-20"
			onMouseEnter={() => setShowArrows(true)} // Show arrows on hover.
			onMouseLeave={() => setShowArrows(false)} // Hide arrows when not hovering.
		>
			{/* Slider title */}
			<h2 className="mb-4 text-2xl font-bold">
				{formattedCategoryName} {formattedContentType}
			</h2>

			{/* Slider container */}
			<div className="flex space-x-4 overflow-x-scroll scrollbar-hide" ref={sliderRef}>
				{/* Map over content and render items */}
				{content.map((item) => (
					<Link to={`/watch/${item.id}`} className="min-w-[250px] relative group" key={item.id}>
						{/* Image wrapper */}
						<div className="rounded-lg overflow-hidden">
							<img
								src={SMALL_IMG_BASE_URL + item.backdrop_path} // Fetch image using the base URL and path.
								alt="Movie image"
								className="transition-transform duration-300 ease-in-out group-hover:scale-125"
							/>
						</div>
						{/* Item title */}
						<p className="mt-2 text-center">{item.title || item.name}</p>
					</Link>
				))}
			</div>

			{/* Navigation arrows (visible on hover) */}
			{showArrows && (
				<>
					{/* Left arrow */}
					<button
						className="absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
                        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
						onClick={scrollLeft}
					>
						<ChevronLeft size={24} /> {/* Left arrow icon */}
					</button>

					{/* Right arrow */}
					<button
						className="absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
                        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
						onClick={scrollRight}
					>
						<ChevronRight size={24} /> {/* Right arrow icon */}
					</button>
				</>
			)}
		</div>
	);
};

export default MovieSlider; // Export the component for use in other parts of the app.
