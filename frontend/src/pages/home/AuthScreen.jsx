import { useState, useEffect, useRef } from "react";
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

  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language
  const [isOpen, setIsOpen] = useState(false); // Controls dropdown visibility
  const options = ["English", "Español"]; // Dropdown options
  const dropdownRef = useRef(null); // Reference for the dropdown container

  const toggleDropdown = () => setIsOpen((prev) => !prev); // Toggle visibility
  const selectLanguage = (language) => {
    setSelectedLanguage(language); // Update selected language
    setIsOpen(false); // Close dropdown
  };

    // Close the dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const features = [
      {
        title: 'Enjoy on your TV',
        description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        icon: '/small_tv.png'
      },
      {
        title: 'Download your shows to watch offline',
        description: 'Save your favorites easily and always have something to watch.',
        icon: '/download.png', // Replace with your actual image/icon
      },
      {
        title: 'Watch everywhere',
        description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        icon: '/watch_everywhere.png', // Replace with your actual image/icon
      },
      {
        title: 'Create profiles for kids',
        description: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
        icon: '/kids_profile.png', // Replace with your actual image/icon
      },
    ];

    //For the FAQ
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
      {
        question: "What is Netflix?",
        answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        
        You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
      },
      {
        question: "How much does Netflix cost?",
        answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month (pre-tax). No extra costs, no contracts.`,
      },
      {
        question: "Where can I watch?",
        answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
      },
      {
        question: "How do I cancel?",
        answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
      },
      {
        question: "What can I watch on Netflix?",
        answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
      },
      {
        question: "Is Netflix good for kids?",
        answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
      },
    ];
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle active item
    };


  return (
    <div>
      <div className="hero-bg relative">
        {/* Navbar Section */}
        <header className="max-w-full mx-32 flex items-center justify-between p-5 pb-10">
          {/* Netflix logo displayed on the top-left */}
          <img src="/netflix-logo.png" alt="Netflix Logo" className="h-12 w-auto" />

          {/* Buttons aligned side by side on the right */}
          <div className="flex items-center gap-4">
            



          <div ref={dropdownRef} className="relative inline-block text-left">
            <button
              className={`text-white text-base border py-1 px-3 rounded-md ${
                isOpen ? "border-2" : "border"
              }`}
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            >
              {`本A ` + selectedLanguage}
              <span className="ml-2 text-xs">▼</span>
            </button>
            {isOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 flex-col justify-center w-[95%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">              
                  {options.map((option) => (
                  <div
                    key={option}
                    className="cursor-pointer text-sm px-4 py-2 text-black text-center hover:bg-blue-500"
                    onClick={() => selectLanguage(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>


            <Link to={"/login"} className="text-white bg-red-700 py-1 px-3 rounded-sm">
              Sign In
            </Link>
          </div>
        </header>


        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-40 text-white w-[44%] mx-auto">
          {/* Main heading introducing Netflix */}
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          {/* Subheading providing additional details */}
          <p className="text-xl font-bold mb-4">Starts at $6.99. Cancel anytime.</p>
          {/* Call-to-action prompting the user to enter their email */}
          <p className="mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Form to collect user's email */}
          <form className="flex flex-col md:flex-row gap-4 w-full" onSubmit={handleFormSubmit}>
            {/* Email input field */}
            <input
              type="email"
              placeholder="Email address"
              className="text-white p-2 rounded flex-1 bg-black/80 border border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on user input
            />
            {/* Submit button with "Get Started" text and a Chevron icon */}
            <button className="bg-red-600 font-semibold text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
              Get Started
              <ChevronRight className="size-8 md:size-10" />
            </button>
          </form>
        </div>
      </div>
     
      
      {/* Image of the Curve */}
      <div className="curve-dn relative"></div>

      <div className="bg-black flex justify-center items-center w-full "> {/* Full-page black background */}
        <div className="flex flex-col md:flex-row justify-center items-center w-[90%] mt-5 space-y-4 md:space-y-0"> {/* Centered content */}
          
          {/* Popcorn Icon */}
          <div className="flex justify-center"> {/* Center icon horizontally */}
            <img
              src="/popcorn.png" // Replace with your popcorn icon URL
              alt="Popcorn Icon"
              className="h-16 w-auto" /* Adjust size as needed */
            />
          </div>

          {/* Main Content Element */}
          <div className="relative ml-0 md:ml-5 bg-gradient-to-r from-[#251733] to-[#15193e] text-white py-4 px-6 rounded-2xl shadow-lg w-full md:w-[80%]">
            <div className="flex items-center space-x-4">
              
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-xl font-bold">
                  The Netflix you love for just $6.99.
                </h2>
                <p className="text-md font-semibold text-gray-300">
                  Get our most affordable, ad-supported plan.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="ml-auto"> {/* Aligns button to the right */}
                <button className="font-bold text-base bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*---------------------------------------------------------------------------------------- */}
      <div className="bg-black content-center flex justify-center">
        <div className="bg-black text-white py-10 w-[80%]">
          <h2 className="text-2xl font-bold text-left mb-4">More Reasons to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a2144] to-[#210e17] rounded-xl shadow-md p-4 flex flex-col justify-between h-72"
              >
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-base text-gray-400">{feature.description}</p>
                </div>

                {/* Image Content */}
                <div className="flex justify-end mt-4">
                  <img src={feature.icon} alt={feature.title} className="w-16 h-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*---------------------------------------------------------------------------------------- */}
      
      {/* This is for the FAQ */}
      <div className="bg-black text-white text-2xl p-6 flex-col px-12 md:px-36">
        <h2 className="mb-4 font-bold">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-700 overflow-hidden rounded-lg`}
            >
              {/* Question */}
              <div
                className={`flex justify-between items-center p-4 cursor-pointer transition-all duration-200 ${
                  activeIndex === index ? "bg-[#414141]" : "bg-[#2d2d2d]"
                } hover:bg-[#414141]`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-4xl font-bold">
                  {activeIndex === index ? "×" : "+"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`bg-[#2d2d2d] transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className={`p-4 text-gray-300`}>
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/*---------------------------------------------------------------------------------------- */}

      {/* Email on the Bottom */}
      <div className="bg-black">
        <div className="flex flex-col items-center justify-center text-center py-10 text-white w-[44%] mx-auto">
          {/* Call-to-action prompting the user to enter their email */}
          <p className="mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Form to collect user's email */}
          <form className="flex flex-col md:flex-row gap-4 w-full" onSubmit={handleFormSubmit}>
            {/* Email input field */}
            <input
              type="email"
              placeholder="Email address"
              className="text-white p-2 rounded flex-1 bg-black/80 border border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on user input
            />
            {/* Submit button with "Get Started" text and a Chevron icon */}
            <button className="bg-red-600 font-semibold text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
              Get Started
              <ChevronRight className="size-8 md:size-10" />
            </button>
          </form>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------------- */}

      {/* Language Changer */}
      <div className="w-full p-5 pb-10 bg-black">
        <div className="relative ml-36 inline-block">
          {/* Dropdown Button */}
          <button
            className={`text-white text-base border py-1 px-3 rounded-md transition-all duration-300 ${
              isOpen ? "border-2 border-blue-500" : "border-gray-500"
            }`}
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
          >
            {`本A ` + selectedLanguage}
            <span className="ml-2 text-xs">▼</span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 flex-col justify-center w-[95%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">              
              {options.map((option) => (
                <div
                  key={option}
                  className="cursor-pointer text-sm px-4 py-2 text-black text-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  onClick={() => selectLanguage(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
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