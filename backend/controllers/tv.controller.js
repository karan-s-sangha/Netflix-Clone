import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingTv(req, res) {
    // Controller to fetch trending TV shows from the TMDB API.
    try {
        // Fetch trending TV shows for the day using the TMDB API.
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");

        // Randomly select one TV show from the results.
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

        // Respond with the selected TV show.
        res.json({ success: true, content: randomMovie });
    } catch (error) {
        // Handle errors by responding with a 500 status and an error message.
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getTvTrailers(req, res) {
    // Controller to fetch trailers for a specific TV show by ID.
    const { id } = req.params; // Extract the TV show ID from the request parameters.
    try {
        // Fetch trailers for the specified TV show from the TMDB API.
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);

        // Respond with the fetched trailers.
        res.json({ success: true, trailers: data.results });
    } catch (error) {
        if (error.message.includes("404")) {
            // If a 404 error occurs, respond with a 404 status and no content.
            return res.status(404).send(null);
        }

        // Handle other errors by responding with a 500 status and an error message.
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getTvDetails(req, res) {
    // Controller to fetch detailed information about a specific TV show by ID.
    const { id } = req.params; // Extract the TV show ID from the request parameters.
    try {
        // Fetch details of the specified TV show from the TMDB API.
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);

        // Respond with the fetched TV show details.
        res.status(200).json({ success: true, content: data });
    } catch (error) {
        if (error.message.includes("404")) {
            // If a 404 error occurs, respond with a 404 status and no content.
            return res.status(404).send(null);
        }

        // Handle other errors by responding with a 500 status and an error message.
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getSimilarTvs(req, res) {
    // Controller to fetch TV shows similar to a specific TV show by ID.
    const { id } = req.params; // Extract the TV show ID from the request parameters.
    try {
        // Fetch similar TV shows for the specified TV show from the TMDB API.
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);

        // Respond with the fetched similar TV shows.
        res.status(200).json({ success: true, similar: data.results });
    } catch (error) {
        // Handle errors by responding with a 500 status and an error message.
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getTvsByCategory(req, res) {
    // Controller to fetch TV shows by a specific category (e.g., "popular" or "top_rated").
    const { category } = req.params; // Extract the category from the request parameters.
    try {
        // Fetch TV shows from the specified category using the TMDB API.
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);

        // Respond with the fetched TV shows in the specified category.
        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        // Handle errors by responding with a 500 status and an error message.
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
