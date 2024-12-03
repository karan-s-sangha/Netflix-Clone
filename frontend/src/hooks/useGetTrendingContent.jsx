import { useEffect, useState } from 'react'; // Import hooks for managing state and lifecycle.
import { useContentStore } from '../store/content'; // Import Zustand store for managing content type.
import axios from 'axios'; // Import Axios for making HTTP requests.

const useGetTrendingContent = () => {
    // State for storing the trending content data.
    const [trendingContent, setTrendingContent] = useState(null);

    // Access the `contentType` (e.g., "movie" or "tv") from the Zustand store.
    const { contentType } = useContentStore();

    useEffect(() => {
        // Function to fetch trending content from the API.
        const getTrendingContent = async () => {
            try {
                // API request to fetch trending content based on content type.
                const res = await axios.get(`/api/v1/${contentType}/trending`);
                
                // Update the `trendingContent` state with the API response.
                setTrendingContent(res.data.content);
            } catch (error) {
                console.error('Error fetching trending content:', error);
                setTrendingContent(null); // Handle errors by resetting the content state.
            }
        };

        getTrendingContent(); // Call the function to fetch content when `contentType` changes.
    }, [contentType]); // Dependency array ensures this runs whenever `contentType` changes.

    // Return the trending content state so it can be used in components.
    return { trendingContent };
};

export default useGetTrendingContent; // Export the hook for use in other parts of the app.
