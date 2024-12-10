import express from "express";

// Import the controller functions
import {
    getNetflixUSMovies,
    getNetflixUSTvShows,
    getNetflixGlobalMovies,
    getNetflixGlobalTvShows
} from "../controllers/home.controller.js";

const router = express.Router();

// Routes for Netflix US Movies and TV Shows
router.get("/us/movies", getNetflixUSMovies);
router.get("/us/tvshows", getNetflixUSTvShows);

// Routes for Netflix Global Movies and TV Shows
router.get("/global/movies", getNetflixGlobalMovies);
router.get("/global/tvshows", getNetflixGlobalTvShows);

export default router;
