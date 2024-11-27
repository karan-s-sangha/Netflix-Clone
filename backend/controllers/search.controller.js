import { User } from "../models/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function searchPerson(req, res) {
	const { query } = req.params; // Extract the query parameter from the request URL.
	try {
		// Call the TMDB API to search for a person using the provided query.
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
		);

		// If no results are found, return a 404 status with null.
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		// Update the user's search history in the database by adding the first result.
		await User.findByIdAndUpdate(req.user._id, {
			$push: {
				searchHistory: {
					id: response.results[0].id,              // TMDB ID of the person.
					image: response.results[0].profile_path, // Profile image path.
					title: response.results[0].name,         // Name of the person.
					searchType: "person",                    // Type of search.
					createdAt: new Date(),                   // Timestamp of the search.
				},
			},
		});

		// Respond with the search results.
		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		// Log and handle errors.
		console.log("Error in searchPerson controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


export async function searchMovie(req, res) {
	const { query } = req.params; // Extract the query parameter from the request URL.

	try {
		// Call the TMDB API to search for a movie using the provided query.
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
		);

		// If no results are found, return a 404 status with null.
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		// Update the user's search history in the database by adding the first result.
		await User.findByIdAndUpdate(req.user._id, {
			$push: {
				searchHistory: {
					id: response.results[0].id,              // TMDB ID of the movie.
					image: response.results[0].poster_path,  // Poster image path.
					title: response.results[0].title,        // Title of the movie.
					searchType: "movie",                     // Type of search.
					createdAt: new Date(),                   // Timestamp of the search.
				},
			},
		});

		// Respond with the search results.
		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		// Log and handle errors.
		console.log("Error in searchMovie controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


export async function searchTv(req, res) {
	const { query } = req.params; // Extract the query parameter from the request URL.

	try {
		// Call the TMDB API to search for a TV show using the provided query.
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
		);

		// If no results are found, return a 404 status with null.
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		// Update the user's search history in the database by adding the first result.
		await User.findByIdAndUpdate(req.user._id, {
			$push: {
				searchHistory: {
					id: response.results[0].id,              // TMDB ID of the TV show.
					image: response.results[0].poster_path,  // Poster image path.
					title: response.results[0].name,         // Name of the TV show.
					searchType: "tv",                        // Type of search.
					createdAt: new Date(),                   // Timestamp of the search.
				},
			},
		});

		// Respond with the search results.
		res.json({ success: true, content: response.results });
	} catch (error) {
		// Log and handle errors.
		console.log("Error in searchTv controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


export async function getSearchHistory(req, res) {
	try {
		// Respond with the user's search history.
		res.status(200).json({ success: true, content: req.user.searchHistory });
	} catch (error) {
		// Handle errors.
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


export async function removeItemFromSearchHistory(req, res) {
	let { id } = req.params; // Extract the ID of the item to be removed.

	id = parseInt(id); // Ensure the ID is an integer.

	try {
		// Remove the item with the matching ID from the user's search history.
		await User.findByIdAndUpdate(req.user._id, {
			$pull: {
				searchHistory: { id: id },
			},
		});

		// Respond with a success message.
		res.status(200).json({ success: true, message: "Item removed from search history" });
	} catch (error) {
		// Log and handle errors.
		console.log("Error in removeItemFromSearchHistory controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}
