import { useState } from "react"; // Import React's useState hook to manage state
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation and useNavigate for programmatic routing
import { ChevronRight } from "lucide-react"; // Import ChevronRight icon for UI enhancements

/**
 * AuthScreen Component
 * This component renders the Netflix authentication screen, including a hero section
 * and multiple feature sections that explain the benefits of using Netflix.
 */
const AuthScreen = () => {
  // State to store the email input from the user
  const [email, setEmail] = useState("");

  // Hook to navigate programmatically to different routes
  const navigate = useNavigate();

  /**
   * Handles form submission
   * Prevents the default form submission and navigates to the signup page
   * with the entered email as a query parameter.
   */
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/signup?email=" + email); // Redirect to the signup page with the email in the query string
  };

  return (
    <div className="hero-bg relative">
      {/* Navbar Section */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        {/* Netflix logo displayed on the top-left */}
        <img src="/netflix-logo.png" alt="Netflix Logo" className="w-64 md:w-52" />
        {/* "Sign In" button navigates to the login page */}
        <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
          Sign In
        </Link>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        {/* Main heading introducing Netflix */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        {/* Subheading providing additional details */}
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
        {/* Call-to-action prompting the user to enter their email */}
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Form to collect user's email */}
        <form className="flex flex-col md:flex-row gap-4 w-1/2" onSubmit={handleFormSubmit}>
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email address"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on user input
          />
          {/* Submit button with "Get Started" text and a Chevron icon */}
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      {/* Separator - visual divider between sections */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* Section 1: Watch on TV */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          {/* Text content on the left */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Enjoy on your TV</h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and
              more.
            </p>
          </div>
          {/* Image and video preview on the right */}
          <div className="flex-1 relative">
            <img src="/tv.png" alt="TV image" className="mt-4 z-20 relative" />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* Section 2: Download and Watch Offline */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          {/* Image with download animation */}
          <div className="flex-1 relative">
            <div className="relative">
              <img src="/stranger-things-lg.png" alt="Stranger Things" className="mt-4" />
              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img src="/stranger-things-sm.png" alt="Download Preview" className="h-full" />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">Stranger Things</span>
                    <span className="text-sm text-blue-500">Downloading...</span>
                  </div>
                  <img src="/download-icon.gif" alt="Download Icon" className="h-12" />
                </div>
              </div>
            </div>
          </div>
          {/* Text content explaining offline downloads */}
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* Section 3: Watch Everywhere */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          {/* Text content on the left */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Watch everywhere</h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
          {/* Image and video preview on the right */}
          <div className="flex-1 relative overflow-hidden">
            <img src="/device-pile.png" alt="Devices" className="mt-4 z-20 relative" />
            <video
              className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* Section 4: Profiles for Kids */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2">
          {/* Image showcasing kids section */}
          <div className="flex-1 relative">
            <img src="/kids.png" alt="Kids" className="mt-4" />
          </div>
          {/* Text content describing kids' profiles */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Create profiles for kids</h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space made just for
              them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen; // Export the component for use in other parts of the app

// General Layout and Spacing
// max-w-6xl: Sets the maximum width of the element to 6xl (1024px).
// mx-auto: Centers the element horizontally within its parent.
// p-4: Adds padding of 1rem (16px) on all sides.
// pb-10: Adds padding of 2.5rem (40px) to the bottom.
// py-40: Adds padding of 10rem (160px) to the top and bottom.
// py-10: Adds padding of 2.5rem (40px) to the top and bottom.
// px-4: Adds padding of 1rem (16px) to the left and right.
// gap-4: Adds a gap of 1rem (16px) between flex children.

// Flexbox Layout
// flex: Enables Flexbox layout for the container.
// flex-col: Stacks the children vertically in a column.
// md:flex-row: Switches the layout to horizontal row on medium screens and larger (768px+).
// flex-col-reverse: Stacks the children vertically, but reverses their order.
// items-center: Vertically aligns all children to the center of the container.
// justify-center: Horizontally centers all children within the container.
// flex-1: Makes the element grow to take up the remaining space within the Flexbox.

// Text and Font
// text-center: Centers the text horizontally within the element.
// text-white: Sets the text color to white.
// text-4xl: Sets the font size to 2.25rem (36px).
// md:text-5xl: Increases the font size to 3rem (48px) on medium screens and larger.
// text-lg: Sets the font size to 1.125rem (18px).
// lg:text-2xl: Increases the font size to 1.5rem (24px) on large screens.
// font-bold: Makes the text bold.
// font-extrabold: Makes the text extra bold.
// text-sm: Sets the font size to 0.875rem (14px).

// Background Colors
// bg-black: Sets the background color to black.
// bg-black/80: Sets a black background with 80% opacity.
// bg-red-600: Sets the background color to a vibrant red.
// bg-[#232323]: Sets the background color to a custom dark gray (#232323).

// Borders
// border: Adds a thin border to the element.
// border-gray-700: Sets the border color to a dark gray shade.
// border-slate-500: Sets the border color to a medium gray slate color.
// rounded: Adds a small border-radius for rounded corners.

// Positioning
// relative: Positions the element relative to its normal flow in the document.
// absolute: Positions the element relative to its nearest positioned ancestor.
// top-1/2: Moves the element down by 50% of its parent's height.
// left-1/2: Moves the element right by 50% of its parent's width.
// -translate-x-1/2: Offsets the element left by half its width (for centering).
// -translate-y-1/2: Offsets the element up by half its height (for centering).
// z-10: Places the element above other elements with a lower z-index.
// z-20: Places the element above elements with a z-index of 10 or lower.

// Width and Height
// w-32: Sets the width of the element to 8rem (128px).
// md:w-52: Increases the width to 13rem (208px) on medium screens and larger.
// w-1/2: Sets the width to 50% of the parent's width.
// w-full: Sets the width to 100% of the parent's width.
// h-2: Sets the height to 2px.
// h-24: Sets the height to 6rem (96px).
// h-1/2: Sets the height to 50% of the parent's height.
// h-4/6: Sets the height to two-thirds (66.67%) of the parent's height.

// Icons and Images
// size-8: Sets the size of the icon to 2rem (32px).
// mt-4: Adds a top margin of 1rem (16px) to the image.

// Responsiveness
// md:: Applies styles for medium screens and larger (768px+).
// lg:: Applies styles for large screens and larger (1024px+).

// Utility
// aria-hidden="true": Marks decorative elements (like separators) as hidden from screen readers.
// playsInline: Ensures the video plays inline (not in full screen) on mobile devices.
// autoPlay: Starts playing the video automatically when the page loads.
// muted: Mutes the audio for the video by default.
// loop: Makes the video loop continuously.