// Import required libraries, hooks, and components
import { useState } from "react";
import { useContentStore } from "../store/content";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const SearchPage = () => {
  // Local state management
  const [activeTab, setActiveTab] = useState("movie"); // Keeps track of the selected search category
  const [searchTerm, setSearchTerm] = useState(""); // Stores the current search input
  const [results, setResults] = useState([]); // Stores search results
  const { setContentType } = useContentStore(); // Updates the global content type

  // Handle tab click events to switch between "Movies," "TV Shows," and "Person"
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab state
    setContentType(tab === "movie" ? "movie" : tab === "tv" ? "tv" : "person"); // Update global content type
    setResults([]); // Clear previous results
  };

  // Handle search submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const res = await axios.get(`/api/v1/search/${activeTab}/${searchTerm}`); // Make API request
      setResults(res.data.content); // Store API response in results
    } catch (error) {
      // Handle errors
      if (error.response.status === 404) {
        toast.error("Nothing found, make sure you are searching under the right category");
      } else {
        toast.error("An error occurred, please try again later");
      }
    }
  };

  // Render the SearchPage component
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        {/* Tab selection buttons */}
        <div className='flex justify-center gap-3 mb-4'>
          {/* Movies Tab */}
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "movie" ? "bg-red-600" : "bg-gray-800"
            } hover:bg-red-700`}
            onClick={() => handleTabClick("movie")}
          >
            Movies
          </button>

          {/* TV Shows Tab */}
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "tv" ? "bg-red-600" : "bg-gray-800"
            } hover:bg-red-700`}
            onClick={() => handleTabClick("tv")}
          >
            TV Shows
          </button>

          {/* Person Tab */}
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "person" ? "bg-red-600" : "bg-gray-800"
            } hover:bg-red-700`}
            onClick={() => handleTabClick("person")}
          >
            Person
          </button>
        </div>

        {/* Search form */}
        <form className='flex gap-2 items-stretch mb-8 max-w-2xl mx-auto' onSubmit={handleSearch}>
          {/* Input field */}
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update input value
            placeholder={"Search for a " + activeTab}
            className='w-full p-2 rounded bg-gray-800 text-white' // Tailwind classes for styling
          />
          {/* Submit button */}
          <button className='bg-red-600 hover:bg-red-700 text-white p-2 rounded'>
            <Search className='size-6' />
          </button>
        </form>

        {/* Results grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {results.map((result) => {
            if (!result.poster_path && !result.profile_path) return null; // Skip results without images

            return (
              <div key={result.id} className='bg-gray-800 p-4 rounded'>
                {/* Handle "Person" category */}
                {activeTab === "person" ? (
                  <div className='flex flex-col items-center'>
                    <img
                      src={ORIGINAL_IMG_BASE_URL + result.profile_path}
                      alt={result.name}
                      className='max-h-96 rounded mx-auto'
                    />
                    <h2 className='mt-2 text-xl font-bold'>{result.name}</h2>
                  </div>
                ) : (
                  /* Handle "Movies" or "TV Shows" */
                  <Link
                    to={"/watch/" + result.id}
                    onClick={() => {
                      setContentType(activeTab); // Update global content type
                    }}
                  >
                    <img
                      src={ORIGINAL_IMG_BASE_URL + result.poster_path}
                      alt={result.title || result.name}
                      className='w-full h-auto rounded'
                    />
                    <h2 className='mt-2 text-xl font-bold'>{result.title || result.name}</h2>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

// bg-black: Sets the background color to black.
// min-h-screen: Ensures the component takes the full height of the viewport.
// text-white: Sets the text color to white.
// container mx-auto px-4 py-8: Creates a centered container with padding on all sides.
// flex justify-center gap-3 mb-4: Creates a flex container for tabs, centers them horizontally, adds spacing, and provides a bottom margin.
// py-2 px-4 rounded: Adds padding and rounded corners to buttons.
// hover:bg-red-700: Changes the background color on hover.
// w-full p-2 rounded bg-gray-800: Makes the input field full-width, adds padding, and rounds the corners with a gray background.
// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4: Creates a responsive grid layout with gaps between items, adapting column counts at different screen sizes.
// bg-gray-800 p-4 rounded: Styles individual result cards with a gray background, padding, and rounded corners.
// max-h-96: Restricts image height to 96 units (384px).