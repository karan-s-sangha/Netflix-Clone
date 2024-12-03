import ReactDOM from "react-dom/client"; // Import ReactDOM to handle rendering React components to the DOM
import React from "react";
import App from "./App.jsx";
import "./index.css";

// Import BrowserRouter from "react-router-dom" to enable routing in the app
import { BrowserRouter } from "react-router-dom";

// Render the application by targeting the root element in the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		{/* Wrap the App component with BrowserRouter to provide routing functionality */}
		<App />
	</BrowserRouter>
);
