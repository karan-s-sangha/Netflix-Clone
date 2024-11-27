// Import the Express framework to create and manage routes.
import express from "express";

// Import controller functions to handle the business logic for TV-related operations.
import { 
    getTrendingTv,       
    getTvTrailers,       
    getTvDetails,        
    getSimilarTvs,       
    getTvsByCategory     
} from "../controllers/tv.controller.js"; 

// Create an Express router instance to define routes.
const router = express.Router();

// Define a route for fetching trending TV shows.
router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

// Export the router so it can be mounted in the main application file.
export default router;
