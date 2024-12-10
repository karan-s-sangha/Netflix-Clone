import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation and useNavigate for programmatic routing
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icon library
import axios from 'axios'; // Import Axios for making HTTP requests.

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

  {/*---------------------------------------------------------------------------------------- */}

  {/*For the Language Selection */}

  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language
  const options = ["English", "Español"]; // Dropdown options
  const [isOpen1, setIsOpen1] = useState(false); // State for the top dropdown
  const [isOpen2, setIsOpen2] = useState(false); // State for the bottom dropdown
  const dropdownRef1 = useRef(null); // Ref for the top dropdown
  const dropdownRef2 = useRef(null); // Ref for the bottom dropdown
  
  const toggleDropdown1 = () => setIsOpen1((prev) => !prev); // Top dropdown toggle
  const toggleDropdown2 = () => setIsOpen2((prev) => !prev); // Bottom dropdown toggle
  
  const handleClickOutside = (event) => {
    // Close the top dropdown if clicked outside
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsOpen1(false);
    }
    // Close the bottom dropdown if clicked outside
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsOpen2(false);
    }
  };
  const handleScroll = () => {
    // Close dropdown on scroll
    setIsOpen1(false);
    setIsOpen2(false);
  };


  const selectLanguage = (language) => {
    setSelectedLanguage(language); // Update selected language
    setIsOpen1(false); // Close dropdown
    setIsOpen2(false);
  };

  useEffect(() => {
    // Add event listeners for click outside and scroll
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll, true);

    // Cleanup listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []); // Run only on mount and unmount

    {/*---------------------------------------------------------------------------------------- */}

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

    {/*---------------------------------------------------------------------------------------- */}

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

    {/*---------------------------------------------------------------------------------------- */}
    
    const movies = [
      { id: 1, title: "The Merry Gentlemen", image: "/merry_gentlemen.png" },
      { id: 2, title: "Hot Frosty", image: "/hot_frosty.png" },
      { id: 3, title: "Bob Peace", image: "/bob_peace.png" },
      { id: 4, title: "Buy Now!", image: "/buy_now.png" },
      { id: 5, title: "The Lost Children", image: "/lost_children.png" },
      { id: 6, title: "Another Movie", image: "/another_movie.png" },
    ];
    
    const sliderRef = useRef(null);
  
    const scrollLeft = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
      }
    };
    
    // Your state and logic for the modal and selected movie
    const [selectedMovie, setSelectedMovie] = useState(null);

    // UseEffect to handle scroll lock
    useEffect(() => {
      if (selectedMovie) {
        // Lock scrolling when the modal is open
        document.body.classList.add("overflow-hidden");
      } else {
        // Unlock scrolling when the modal is closed
        document.body.classList.remove("overflow-hidden");
      }

      // Cleanup function to ensure no side effects
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }, [selectedMovie]); // Dependency on selectedMovie

    {/*----------------------------------------------------------------------------------------*/}
    
    {/*For the Region and Content Type Selection */}

    const [selectedRegion, setSelectedRegion] = useState("United States"); // Default Region
    const [selectedContent, setSelectedContent] = useState("Movies"); // Default language
    const optionsRegion = ["United States", "Global"]; // Dropdown options
    const optionsContent = ["Movies", "TV Shows"]; // Dropdown options
    const [isOpenRegion, setIsOpenRegion] = useState(false); // State for the top dropdown
    const [isOpenContent, setIsOpenContent] = useState(false); // State for the bottom dropdown
    const dropdownRefRegion = useRef(null); // Ref for the top dropdown
    const dropdownRefContent = useRef(null); // Ref for the bottom dropdown
    
    const toggleDropdownRegion = () => setIsOpenRegion((prev) => !prev); // Top dropdown toggle
    const toggleDropdownContent = () => setIsOpenContent((prev) => !prev); // Bottom dropdown toggle
    
    const handleClickOutside_Region_Content = (event) => {
      // Close the top dropdown if clicked outside
      if (dropdownRefRegion.current && !dropdownRefRegion.current.contains(event.target)) {
        setIsOpenRegion(false);
      }
      // Close the bottom dropdown if clicked outside
      if (dropdownRefContent.current && !dropdownRefContent.current.contains(event.target)) {
        setIsOpenContent(false);
      }
    };
    const handleScroll_Region_Content = () => {
      // Close dropdown on scroll
      setIsOpenRegion(false);
      setIsOpenContent(false);
    };


    const select_Region = (Region) => {
      setSelectedRegion(Region); // Update selected Region
      setIsOpenRegion(false); // Close dropdown
    };
    const select_Content = (Content) => {
      setSelectedContent(Content); // Update selected Region
      setIsOpenContent(false); // Close dropdown
    };

    useEffect(() => {
      // Add event listeners for click outside and scroll
      document.addEventListener("mousedown", handleClickOutside_Region_Content);
      document.addEventListener("scroll", handleScroll_Region_Content, true);

      // Cleanup listeners on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside_Region_Content);
        document.removeEventListener("scroll", handleScroll_Region_Content, true);
      };
    }, []); // Run only on mount and unmount

    {/*---------------------------------------------------------------------------------------- */}

    {/*For Getting custom images from the api */}

    // State for fetched dropdown data
    const [dropdownData, setDropdownData] = useState([]);
    const [displayedContent, setDisplayedContent] = useState([]);

    // Fetch dropdown data when a selection changes
    useEffect(() => {
      const fetchData = async () => {
        try {
          const endpointMap = {
            "United States Movies": "/api/v1/movie/trending",
            "United States TV Shows": "/api/v1/home/us/tvshows",
            "Global Movies": "/api/v1/home/global/movies",
            "Global TV Shows": "/api/v1/home/global/tvshows",
          };

          const endpointKey = endpointMap[`${selectedRegion} ${selectedContent}`];
          const response = await axios.get(endpointMap[endpointKey]);

          setDropdownData(response.data.content || []);
          console.log("Top ",dropdownData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, [selectedRegion, selectedContent]);

    // Update displayed content when dropdown data changes
    useEffect(() => {
      setDisplayedContent(dropdownData);
    }, [dropdownData]);

  {/*---------------------------------------------------------------------------------------- */}

  return (
    <div>
      <div className="hero-bg relative">
        {/* Navbar Section */}
        <header className="max-w-full mx-32 flex items-center justify-between p-5 pb-10">
          {/* Netflix logo displayed on the top-left */}
          <img src="/netflix-logo.png" alt="Netflix Logo" className="h-12 w-auto" />

          {/* Buttons aligned side by side on the right */}
          <div className="flex items-center gap-4">
            



          <div ref={dropdownRef1} className="relative inline-block text-left">
            <button
              className={`text-white text-base border py-1 px-3 rounded-md ${
                isOpen1 ? "border-2" : "border"
              }`}
              aria-haspopup="true"
              aria-expanded={isOpen1}
              onClick={toggleDropdown1}
            >
              {`本A ` + selectedLanguage}
              <span className="ml-2 text-xs">▼</span>
            </button>
            {isOpen1 && (
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
      
      {/* The movies to watch on Netflix */}
      <div className="bg-black text-white p-6 px-12 md:px-48 py-16 relative">
        <h2 className="text-3xl font-bold mb-6">Trending Now</h2>

        {/* Optimized Dropdown for Region and Content Type Selection */}
        <div className="w-full bg-[black] flex items-center space-x-6 pb-5">
          {/* Region Dropdown */}
          <div ref={dropdownRefRegion} className="relative inline-block z-20 items-center ">
            <button
              className={`text-white text-xl border border-gray-500 py-1 px-3 rounded-md bg-[#161616] min-w-44 ${
                isOpenRegion ? "outline outline-2 outline-white" : "outline-none"
              }`}
              aria-haspopup="true"
              aria-expanded={isOpenRegion}
              onClick={toggleDropdownRegion}
            >
              {selectedRegion}
              <span className="ml-2 text-xs">▼</span>
            </button>

            {isOpenRegion && (
              <div className="absolute left-1/2 transform -translate-x-1/2 flex-col w-[95%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {optionsRegion.map((option) => (
                  <div
                    key={option}
                    className="cursor-pointer text-lg px-4 py-2 text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    onClick={() => select_Region(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content Type Dropdown */}
          <div ref={dropdownRefContent} className="relative inline-block ml-12 z-20">
            <button
              className={`text-white text-xl border border-gray-500 py-1 px-3 rounded-md bg-[#161616] min-w-32 ${
                isOpenContent ? "outline outline-2 outline-white" : "outline-none"
              }`}
              aria-haspopup="true"
              aria-expanded={isOpenContent}
              onClick={toggleDropdownContent}
            >
              {selectedContent}
              <span className="ml-2 text-xs">▼</span>
            </button>

            {isOpenContent && (
              <div className="absolute left-1/2 transform -translate-x-1/2 flex-col w-[95%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {optionsContent.map((option) => (
                  <div
                    key={option}
                    className="cursor-pointer text-lg px-4 py-2 text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    onClick={() => select_Content(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Wrapper for Carousel and Buttons */}
        <div className="flex items-center relative h-56 bg-black">
          {/* Left Arrow */}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 -left-14 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
            onClick={scrollLeft}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-hidden w-full" ref={sliderRef}>
            {/* Movie Items */}
            <div className="flex transition-transform duration-700 gap-x-10">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="flex-shrink-0 flex flex-col items-center relative h-56 group"
                >
                  {/* Movie Image */}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedMovie(movie); // Set the selected movie for modal
                    }}
                    className="block"
                  >
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-56 h-auto mb-4 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-110"
                    />
                  </a>

                  {/* Number Overlay */}
                  <span
                    className="absolute bottom-2 -left-6 text-black font-bold text-8xl w-16 h-auto flex items-center justify-center"
                    style={{
                      WebkitTextStroke: "2px white",
                    }}
                  >
                    {movie.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 -right-14 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
            onClick={scrollRight}
          >
            <ChevronRight size={32} />
          </button>
        </div>

      {/*---------------------------------------------------------------------------------------- */}
      
      {/* Modal for Larger Image */}
      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20"
          onClick={() => setSelectedMovie(null)} // Close modal on background click
        >
          <div
            className="bg-[#161616] border border-[#404040] rounded-lg relative max-w-3xl text-white"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to background
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-8 text-white font-bold text-3xl z-30"
              onClick={() => setSelectedMovie(null)} // Close button
            >
              ✕
            </button>

            {/* Background Image with Gradient Overlay */}
            <div
              className="relative bg-slate-800 bg-cover bg-center min-h-[26em] rounded-t-lg overflow-hidden blur-animation"
              style={{
                backgroundImage: `url(${selectedMovie.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Gradient Overlay for Fade Effect */}
              <div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                  background: `
                    linear-gradient(to top, #161616, transparent), /* Bottom-to-top gradient */
                    linear-gradient(to top right, #161616 20%, transparent 50%)`,
                }}
              ></div>
            </div>

            {/* Movie Details */}
            <div className="mt-2 px-10 pb-10">
              {/* Metadata */}
              <div className="flex items-center text-base space-x-2 mt-3">
                <span className="px-2 py-1 rounded-md bg-[#414141]">2017</span>
                <span className="px-2 py-1 rounded-md bg-[#414141]">R</span>
                <span className="px-2 py-1 rounded-md bg-[#414141]">Movie</span>
                <span className="px-2 py-1 rounded-md bg-[#414141]">Comedies</span>
              </div>

              {/* Description */}
              <p className="text-white text-lg mt-8 leading-tight">
                After learning their supposedly dead father is still alive, fraternal twins Peter and Kyle go on a road trip to find him, uncovering other truths.
              </p>

              {/* Call-to-Action Button */}
              <button className="flex mt-12 bg-red-600 text-white px-6 py-3 font-semibold rounded-md text-xl">
                Get Started
                <ChevronRight className="size-8" />
              </button>
            </div>
          </div>
        </div>
      )}


    </div>

      {/*---------------------------------------------------------------------------------------- */}
      
      {/*Grid for More Reasons to Join */}
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
                className={`bg-[#2d2d2d] transition-[max-height] duration-700 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
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
        <div ref={dropdownRef2} className="relative ml-36 inline-block">
          {/* Dropdown Button */}
          <button
            className={`text-white text-base border py-1 px-3 rounded-md transition-all duration-300 ${
              isOpen2 ? "border-2 border-blue-500" : "border-gray-500"
            }`}
            aria-haspopup="true"
            aria-expanded={isOpen2}
            onClick={toggleDropdown2}
          >
            {`本A ` + selectedLanguage}
            <span className="ml-2 text-xs">▼</span>
          </button>

          {/* Dropdown Menu */}
          {isOpen2 && (
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