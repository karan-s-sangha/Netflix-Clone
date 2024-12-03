// A functional component to render a loading skeleton for the Watch Page.
const WatchPageSkeleton = () => {
	return (
		<div className="animate-pulse">
			{/* Root container for the skeleton with a shimmer animation */}
			{/* Tailwind CSS Classes:
				- `animate-pulse`: Applies a pulse animation to simulate content loading.
			*/}
			<div className="bg-gray-700 rounded-md w-40 h-6 mb-4 shimmer"></div>
			{/* A small placeholder rectangle to represent a title or heading */}
			{/* Tailwind CSS Classes:
				- `bg-gray-700`: Dark gray background for the skeleton block.
				- `rounded-md`: Adds medium rounded corners (4px radius).
				- `w-40`: Sets the width to 10rem (160px).
				- `h-6`: Sets the height to 1.5rem (24px).
				- `mb-4`: Adds a bottom margin of 1rem (16px) to space out elements.
				- `shimmer`: Custom class (likely applies a shimmering effect, defined elsewhere).
			*/}

			<div className="bg-gray-700 rounded-md w-full h-96 mb-4 shimmer"></div>
			{/* A large placeholder rectangle to represent a video player or image */}
			{/* Tailwind CSS Classes:
				- `w-full`: Sets the width to 100% of the parent container.
				- `h-96`: Sets the height to 24rem (384px).
				- Other classes are the same as above.
			*/}

			<div className="bg-gray-700 rounded-md w-3/4 h-6 mb-2 shimmer"></div>
			{/* A medium placeholder rectangle to represent text or metadata */}
			{/* Tailwind CSS Classes:
				- `w-3/4`: Sets the width to 75% of the parent container.
				- `h-6`: Sets the height to 1.5rem (24px).
				- `mb-2`: Adds a bottom margin of 0.5rem (8px).
			*/}

			<div className="bg-gray-700 rounded-md w-1/2 h-6 mb-4 shimmer"></div>
			{/* A smaller placeholder rectangle to represent a subtitle or small text */}
			{/* Tailwind CSS Classes:
				- `w-1/2`: Sets the width to 50% of the parent container.
				- `h-6`: Sets the height to 1.5rem (24px).
				- `mb-4`: Adds a bottom margin of 1rem (16px).
			*/}

			<div className="bg-gray-700 rounded-md w-full h-24 shimmer"></div>
			{/* A wide placeholder rectangle to represent additional content, like a description */}
			{/* Tailwind CSS Classes:
				- `w-full`: Sets the width to 100% of the parent container.
				- `h-24`: Sets the height to 6rem (96px).
			*/}
		</div>
	);
};

// Export the component to be used in other parts of the application.
export default WatchPageSkeleton;
