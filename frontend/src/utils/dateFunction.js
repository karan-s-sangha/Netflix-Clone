// Export the function so it can be imported and used in other files.
export function formatReleaseDate(date) {
    // Convert the input date string into a JavaScript Date object.
    // The `new Date()` constructor parses the date string into a date instance.
    // Example: "2024-11-25T00:00:00Z" becomes a Date object for November 25, 2024.
    const parsedDate = new Date(date);

    // Validate if the parsed date is valid.
    // If the input is not a valid date, `parsedDate` will be an "Invalid Date" object.
    if (isNaN(parsedDate)) {
        return "Invalid Date"; // Return a fallback string for invalid inputs.
    }

    // Format the date into a human-readable string using `toLocaleDateString`.
    // The first argument ("en-US") specifies the locale for formatting.
    // The second argument specifies options for formatting:
    // - `year: "numeric"`: Displays the full year (e.g., 2024).
    // - `month: "long"`: Displays the full name of the month (e.g., November).
    // - `day: "numeric"`: Displays the day of the month (e.g., 25).
    return parsedDate.toLocaleDateString("en-US", {
        year: "numeric",   // Include the full year in the output.
        month: "long",     // Include the full month name in the output.
        day: "numeric",    // Include the numeric day of the month in the output.
    });
}
