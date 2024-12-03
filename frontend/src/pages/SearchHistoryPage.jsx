// Import required libraries and components
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

// Utility function to format a date string into a readable format
function formatDate(dateString) {
  const date = new Date(dateString); // Create a Date object
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`; // Return the formatted date
}

const SearchHistoryPage = () => {
  // State to store search history
  const [searchHistory, setSearchHistory] = useState([]);

  // Fetch search history on component mount
  useEffect(() => {
    const getSearchHistory = async () => {
      try {
        const res = await axios.get(`/api/v1/search/history`); // API call to fetch search history
        setSearchHistory(res.data.content); // Update state with fetched data
      } catch (error) {
        setSearchHistory([]); // Handle errors by resetting the search history
      }
    };
    getSearchHistory();
  }, []);

  // Function to handle deletion of a search history entry
  const handleDelete = async (entry) => {
    try {
      await axios.delete(`/api/v1/search/history/${entry.id}`); // API call to delete a history entry
      setSearchHistory(searchHistory.filter((item) => item.id !== entry.id)); // Remove the deleted entry from the state
    } catch (error) {
      toast.error("Failed to delete search item"); // Show an error toast if deletion fails
    }
  };

  // If there is no search history, display a message
  if (searchHistory?.length === 0) {
    return (
      <div className='bg-black min-h-screen text-white'>
        <Navbar />
        <div className='max-w-6xl mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-8'>Search History</h1>
          <div className='flex justify-center items-center h-96'>
            <p className='text-xl'>No search history found</p>
          </div>
        </div>
      </div>
    );
  }

  // Render search history
  return (
    <div className='bg-black text-white min-h-screen'>
      <Navbar />

      <div className='max-w-6xl mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-8'>Search History</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {searchHistory?.map((entry) => (
            <div key={entry.id} className='bg-gray-800 p-4 rounded flex items-start'>
              {/* Display search history image */}
              <img
                src={SMALL_IMG_BASE_URL + entry.image}
                alt='History image'
                className='size-16 rounded-full object-cover mr-4'
              />
              <div className='flex flex-col'>
                {/* Display search entry title */}
                <span className='text-white text-lg'>{entry.title}</span>
                {/* Display formatted creation date */}
                <span className='text-gray-400 text-sm'>{formatDate(entry.createdAt)}</span>
              </div>

              {/* Display the type of search (Movie, TV, or Person) */}
              <span
                className={`py-1 px-3 min-w-20 text-center rounded-full text-sm ml-auto ${
                  entry.searchType === "movie"
                    ? "bg-red-600"
                    : entry.searchType === "tv"
                    ? "bg-blue-600"
                    : "bg-green-600"
                }`}
              >
                {entry.searchType[0].toUpperCase() + entry.searchType.slice(1)} {/* Capitalize the type */}
              </span>

              {/* Delete icon */}
              <Trash
                className='size-5 ml-4 cursor-pointer hover:fill-red-600 hover:text-red-600'
                onClick={() => handleDelete(entry)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHistoryPage;

// bg-black: Sets the background color to black.
// min-h-screen: Ensures the component takes up at least the full screen height.
// text-white: Makes the text color white.
// max-w-6xl mx-auto: Centers the content and limits its width to 6xl.
// px-4 py-8: Adds padding on all sides (4 units horizontally, 8 units vertically).
// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4: Creates a responsive grid layout with a gap between items.
// bg-gray-800 p-4 rounded: Styles each history entry with a gray background, padding, and rounded corners.
// size-16: Sets the image size to 16 units (64px, assuming a size-* utility exists or custom class).
// object-cover: Ensures the image covers the container without distortion.
// hover:fill-red-600 hover:text-red-600: Changes the icon fill and text color to red on hover.
// rounded-full: Makes the image circular.
// py-1 px-3 min-w-20 rounded-full: Styles the type badge with padding, a minimum width, and rounded corners.