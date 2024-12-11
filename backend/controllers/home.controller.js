// Import a helper function to interact with the TMDB API
import { fetchFromTMDB } from "../services/tmdb.service.js";

// Controller function to get Netflix US Movies
export async function getNetflixUSMovies(req, res) {
    try {
        // Fetch US movies available on Netflix
        const data = await fetchFromTMDB(
            "https://api.themoviedb.org/3/discover/movie?with_networks=213&region=US&language=en-US&page=1"
        );

        // Respond with the fetched movies
        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        // Handle errors and respond with a 500 status code
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Controller function to get Netflix US TV Shows
export async function getNetflixUSTvShows(req, res) {
    try {
        // Fetch US TV shows available on Netflix
        const data = await fetchFromTMDB(
            "https://api.themoviedb.org/3/discover/tv?with_networks=213&region=US&language=en-US&page=1"
        );

        // Respond with the fetched TV shows
        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        // Handle errors and respond with a 500 status code
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Controller function to get Netflix Global Movies
export async function getNetflixGlobalMovies(req, res) {
    try {
        // Fetch global movies available on Netflix
        const data = await fetchFromTMDB(
            "https://api.themoviedb.org/3/discover/movie?with_networks=213&language=en-US&page=1"
        );

        // Respond with the fetched movies
        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        // Handle errors and respond with a 500 status code
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Controller function to get Netflix Global TV Shows
export async function getNetflixGlobalTvShows(req, res) {
    try {
        // Fetch global TV shows available on Netflix
        const data = await fetchFromTMDB(
            "https://api.themoviedb.org/3/discover/tv?with_networks=213&language=en-US&page=1"
        );

        // Respond with the fetched TV shows
        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        // Handle errors and respond with a 500 status code
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
