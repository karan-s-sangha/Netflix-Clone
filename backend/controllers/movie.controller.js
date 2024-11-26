// Import a helper function to interact with the TMDB API. function that handles HTTP requests (e.g. axios).
import { fetchFromTMDB } from "../services/tmdb.service.js";

// Controller function to get a trending movie
export async function getTrendingMovie(req, res) {
	try {
		// Fetch trending movies from TMDB API (for the current day)
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
		
		// Select a random movie from the fetched results
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		// Respond with the selected random movie
		res.json({ success: true, content: randomMovie });
	} catch (error) {
		// Handle errors and respond with a 500 status code for internal server errors
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Controller function to get trailers for a specific movie
export async function getMovieTrailers(req, res) {
	const { id } = req.params; // Extract the movie ID from the request parameters
	try {
		// Fetch movie trailers from TMDB API for the given movie ID
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
		
		// Respond with the fetched trailers
		res.json({ success: true, trailers: data.results });
	} catch (error) {
		if (error.message.includes("404")) {
			// If a 404 error is encountered, return a null response
			return res.status(404).send(null);
		}

		// Handle general errors and respond with a 500 status code
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Controller function to get detailed information about a specific movie
export async function getMovieDetails(req, res) {
	const { id } = req.params; // Extract the movie ID from the request parameters
	try {
		// Fetch movie details from TMDB API for the given movie ID
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
		
		// Respond with the fetched movie details
		res.status(200).json({ success: true, content: data });
	} catch (error) {
		if (error.message.includes("404")) {
			// If a 404 error is encountered, return a null response
			return res.status(404).send(null);
		}

		// Handle general errors and respond with a 500 status code
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Controller function to get movies similar to a specific movie
export async function getSimilarMovies(req, res) {
	const { id } = req.params; // Extract the movie ID from the request parameters
	try {
		// Fetch similar movies from TMDB API for the given movie ID
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
		
		// Respond with the fetched similar movies
		res.status(200).json({ success: true, similar: data.results });
	} catch (error) {
		// Handle errors and respond with a 500 status code
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Controller function to get movies by a specific category
export async function getMoviesByCategory(req, res) {
	const { category } = req.params; // Extract the category from the request parameters
	try {
		// Fetch movies from TMDB API for the given category
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
		
		// Respond with the fetched movies in the category
		res.status(200).json({ success: true, content: data.results });
	} catch (error) {
		// Handle errors and respond with a 500 status code
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}
