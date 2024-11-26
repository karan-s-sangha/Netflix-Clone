// Import the Axios library to handle HTTP requests.
import axios from "axios"; 
import { ENV_VARS } from "../config/envVars.js"; 

export const fetchFromTMDB = async (url) => { 

    // Options object contains configuration for the Axios request.
    const options = { 
            // Custom headers for the API request.
        headers: { 
            // Specifies that the API should respond with JSON data.
            accept: 'application/json', 
            // Authorization header includes the Bearer token for authenticating with the TMDB API. The token is stored in environment variables for security.
            Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY 
        }
    };

    // Make a GET request to the specified `url` using Axios, passing the `options` object for headers.
    const response = await axios.get(url, options); 

    if(response.status !== 200){ 
        throw new Error("Failed to fetch data from TMDB" + response.statusText ); 
    }

    // If the request is successful, return the `data` property from the response object (contains the API response).
    return response.data; 
};
