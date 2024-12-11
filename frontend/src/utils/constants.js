// Base URL for small-sized images (500px wide).
// Used to fetch images in a smaller size for better performance in thumbnails or lists.
export const SMALL_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Base URL for original-sized images.
// Used to fetch high-resolution images, often for detail views or backgrounds.
export const ORIGINAL_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

// Predefined categories for movies.
// These categories align with the TMDb API endpoints for movies.
export const MOVIE_CATEGORIES = [
    "now_playing", // Movies currently playing in theaters.
    "top_rated",   // Movies with the highest ratings on TMDb.
    "popular",     // Movies that are currently popular.
    "upcoming",    // Movies scheduled for release soon.
];

// Predefined categories for TV shows.
// These categories align with the TMDb API endpoints for TV shows.
export const TV_CATEGORIES = [
    "airing_today", // TV shows airing today.
    "on_the_air",   // TV shows currently airing episodes.
    "popular",      // TV shows that are currently popular.
    "top_rated",    // TV shows with the highest ratings on TMDb.
];
export const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  