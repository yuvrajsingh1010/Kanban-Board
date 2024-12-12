import { createSlice } from "@reduxjs/toolkit";  // Import the createSlice function from Redux Toolkit

// Define the initial state for the tasks slice of state
const initialState = {
  tasks: [],  // Array to store the task objects
  searchQuery: "",  // String to store the search query for filtering tasks
};

// Create a slice for tasks with reducers to manage the tasks state
const taskSlice = createSlice({
  name: "tasks",  // Name of the slice (this is used for debugging)
  initialState,  // Set the initial state defined above
  reducers: {
    // Action to add a new task to the tasks array
    addTask: (state, action) => {
      state.tasks.push(action.payload);  // Add the new task (payload) to the tasks array
    },
    // Action to update the stage of a specific task
    updateTaskStage: (state, action) => {
      const { id, stage } = action.payload;  // Destructure id and stage from the action payload
      const task = state.tasks.find((task) => task.id === id);  // Find the task with the given id
      if (task) task.stage = stage;  // If the task exists, update its stage
    },
    // Action to set the search query for filtering tasks
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;  // Update the searchQuery with the payload
    },
  },
});

// Export the actions so they can be dispatched in components
export const { addTask, updateTaskStage, setSearchQuery } = taskSlice.actions;

// Export the reducer to be used in the store
export default taskSlice.reducer;
