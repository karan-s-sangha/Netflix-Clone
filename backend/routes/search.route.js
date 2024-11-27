import express from "express";

import {
	getSearchHistory,             
	removeItemFromSearchHistory, 
	searchMovie,              
	searchPerson,                
	searchTv                      
} from "../controllers/search.controller.js";

// Create a new Express Router instance to define and organize API routes for search functionality.
const router = express.Router(); 

// Define a route for searching by query.
// HTTP GET request to `/person/:query` invokes `searchPerson` to search for people based on the query parameter.
router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);
router.get("/history", getSearchHistory);
router.delete("/history/:id", removeItemFromSearchHistory);

// Export the router so it can be mounted in the main application file.
export default router;
