// Import a helper function to interact with the TMDB API
import { fetchFromTMDB } from "../services/tmdb.service.js";

// Utility function to map languages to TMDB's language format
const getLanguageCode = (language) => {
    const languageMap = {
        English: "en-US",
        Español: "es-ES",
    };
    return languageMap[language] || "en-US"; // Default to English if the language is not found
};

// Controller function to get Netflix US Movies
export async function getNetflixUSMovies(req, res) {
    try {
        const language = getLanguageCode(req.query.language || "English");
        const data = await fetchFromTMDB(
            `https://api.themoviedb.org/3/discover/movie?with_networks=213&region=US&language=${language}&page=1`
        );

        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Controller function to get Netflix US TV Shows
export async function getNetflixUSTvShows(req, res) {
    try {
        const language = getLanguageCode(req.query.language || "English");
        const data = await fetchFromTMDB(
            `https://api.themoviedb.org/3/discover/tv?with_networks=213&region=US&language=${language}&page=1`
        );

        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Controller function to get Netflix Global Movies
export async function getNetflixGlobalMovies(req, res) {
    try {
        const language = getLanguageCode(req.query.language || "English");
        const data = await fetchFromTMDB(
            `https://api.themoviedb.org/3/discover/movie?with_networks=213&language=${language}&page=1`
        );

        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Controller function to get Netflix Global TV Shows
export async function getNetflixGlobalTvShows(req, res) {
    try {
        const language = getLanguageCode(req.query.language || "English");
        const data = await fetchFromTMDB(
            `https://api.themoviedb.org/3/discover/tv?with_networks=213&language=${language}&page=1`
        );

        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
