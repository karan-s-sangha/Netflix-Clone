import { create } from "zustand"; // Import Zustand's `create` function to define a state store.

// Define a Zustand store for managing content type state.
export const useContentStore = create((set) => ({
    // Initial state for the content type.
    contentType: "movie", // Default value is "movie".

    // Action to update the `contentType` state.
    // The `type` parameter specifies the new content type.
    setContentType: (type) => set({ contentType: type }),
    // `set` is a function provided by Zustand to update the store's state.
}));
