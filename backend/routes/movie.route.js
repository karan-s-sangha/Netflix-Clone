import express from "express"; 

// Import the controller function to handle fetching movies. (Express)
import { getTrendingMovie } from "../controllers/movie.controller.js";
import { getMovieTrailers } from "../controllers/movie.controller.js";
import { getMovieDetails } from "../controllers/movie.controller.js";
import { getSimilarMovies } from "../controllers/movie.controller.js";
import { getMoviesByCategory } from "../controllers/movie.controller.js";

// Create an instance of an Express Router to manage API endpoints related to movies. (Express)
const router = express.Router(); 

// Define the route for fetching movies
// HTTP GET request to "/trending" will invoke the `getTrendingMovie` controller. (Express)
router.get("/trending", getTrendingMovie); 
router.get("/:id/trailers", getMovieTrailers); 
router.get("/:id/details", getMovieDetails); 
router.get("/:id/similar", getSimilarMovies); 
router.get("/:category", getMoviesByCategory); 

export default router; 
