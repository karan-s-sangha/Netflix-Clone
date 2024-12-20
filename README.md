<img width="925" alt="image" src="https://github.com/user-attachments/assets/84778cc2-a01a-4c94-ab1a-ae95d063b4ea" />

# MERN Netflix Clone Application

This project is a **Netflix-inspired application** designed to replicate key features of the popular streaming platform. It allows users to browse movies and TV shows, switch between languages and regions, and perform user authentication in an intuitive, responsive interface.


## Access
The project is deployed on Render.com and can be accessed at https://netflix-clone-rzfu.onrender.com/. Please note that it may take a moment to load as the server initializes.

## Features
- **Movie and TV Show Browsing**: Discover trending, top-rated, and upcoming movies and TV shows dynamically fetched from the TMDB API.
- **Multi-language Support**: Switch seamlessly between **English** and **Spanish** for a localized experience.
- **Region-specific Content**: View tailored content for specific regions, such as **United States** or **Global**.
- **User Authentication**: Includes **Sign Up** and **Login** functionality.
- **Responsive UI**: Works across all devices, from desktops to mobile phones.
- **FAQs and Help Section**: Detailed answers to common questions and features.
- **Dynamic Genres and Categories**: Content is automatically categorized based on TMDB genres and APIs.



## Technologies Used
### **Frontend**
- **React**: Component-based framework for building the user interface.
- **Zustand**: Lightweight state management library for handling language preferences and content types.
- **React Router**: For navigation and routing across pages.
- **Axios**: For seamless API communication between the frontend and backend.
- **Lucide React**: Icon library to enhance UI design.
- **CSS/TailWind**: For styling components and ensuring a responsive layout.

### **Backend**
- **Node.js**: Server-side runtime environment for JavaScript.
- **Express.js**: Backend framework to create RESTful APIs.
- **TMDB API**: External API for fetching movie and TV show data dynamically.
- **Custom Utilities**: Helper functions for handling API requests and dynamic language switching.

### **Database**
- **MongoDB**: For storing user data (e.g., authentication, search history).


---
## Project Structure

```plaintext
frontend/
├── components/       # Reusable UI components
├── pages/            # Page components (Home, Sign Up, Login, etc.)
├── store/            # Zustand store for global state management
├── utils/            # Constants and helper functions
└── App.js            # Entry point for the React application

backend/
├── controllers/      # API controller logic
├── routes/           # Express routes for the API
├── services/         # TMDB interaction services
└── server.js         # Entry point for the backend server
```

---

## TMDB API Integration

The application interacts with the **TMDB API** to fetch movies and TV shows dynamically. 

Endpoints used:
- **Movies**: `https://api.themoviedb.org/3/discover/movie`
- **TV Shows**: `https://api.themoviedb.org/3/discover/tv`

### Parameters
- **Language**: Supports `en-US` (English) and `es-ES` (Spanish).
- **Region**: Allows filtering content by region, e.g., `US` or `Global`.
- **Content Type**: Distinguishes between Movies and TV Shows.

---

## How to Run the Project

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **TMDB API Key**: Sign up at [TMDB](https://www.themoviedb.org/) to obtain an API key.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/karan-s-sangha/netflix-clone.git
   cd netflix-clone
   ```

2. **Set Up Backend**
- Create a `.env` file in the root directory with the following content:
```env
   PORT=5000
   MONGO_URI=your_mongo_uri
   NODE_ENV=development
   JWT_SECRET=your_jwt_secre
   TMDB_API_KEY=your_tmdb_api_key
```
- Build the application:
  ```bash
  npm run build
  ```
  
- Start the application:
  ```bash
  npm run start
  ```

3. **Access the Application**
   Open your browser and navigate to `http://localhost:5000`.

---


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements

- **TMDB API**: For providing the data.
- **Netflix**: For the inspiration.
- **React**: For the fantastic frontend framework.
