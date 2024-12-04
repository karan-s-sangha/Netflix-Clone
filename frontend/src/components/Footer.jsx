const Footer = () => {
	return (
		<footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
			{/* Footer container */}
			{/* Tailwind CSS Classes:
				- `py-6`: Adds vertical padding of 1.5rem (24px).
				- `md:px-8`: Adds horizontal padding of 2rem (32px) on medium screens and above.
				- `md:py-0`: Removes vertical padding on medium screens and above.
				- `bg-black`: Sets the background color to black.
				- `text-white`: Sets the text color to white.
				- `border-t`: Adds a top border.
				- `border-gray-800`: Sets the top border color to dark gray.
			*/}

			<div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				{/* Inner container for layout */}
				{/* Tailwind CSS Classes:
					- `flex`: Enables Flexbox layout.
					- `flex-col`: Stacks children vertically on smaller screens.
					- `items-center`: Centers children along the cross-axis.
					- `justify-between`: Distributes children with space between them on larger screens.
					- `gap-4`: Adds spacing of 1rem (16px) between children.
					- `md:h-24`: Sets the height to 6rem (96px) on medium screens and above.
					- `md:flex-row`: Switches to horizontal layout on medium screens and above.
				*/}

				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					{/* Attribution text */}
					{/* Tailwind CSS Classes:
						- `text-balance`: Custom class for balanced text (assumed to be defined elsewhere).
						- `text-center`: Centers the text horizontally.
						- `text-sm`: Sets the font size to 0.875rem (14px).
						- `leading-loose`: Sets the line-height to 2 (32px for 16px text).
						- `text-muted-foreground`: Custom class for muted text color (assumed to be defined elsewhere).
						- `md:text-left`: Aligns text to the left on medium screens and above.
					*/}
					Built by{" "}
					<a
						href="https://github.com/karan-s-sangha"
						target="_blank"
						className="font-medium underline underline-offset-4"
					>
						karan
					</a>
					. The source code is available on{" "}
					<a
						href="https://github.com/karan-s-sangha"
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						GitHub
					</a>
					.
					{/* Hyperlinks to GitHub with underline styling */}
					{/* Tailwind CSS Classes for links:
						- `font-medium`: Applies medium font weight.
						- `underline`: Underlines the link text.
						- `underline-offset-4`: Adds a 4px offset between the text and underline.
					*/}
				</p>
			</div>
		</footer>
	);
};

export default Footer; // Export the component for use in the app.
