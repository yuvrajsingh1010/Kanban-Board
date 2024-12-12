import { configureStore } from "@reduxjs/toolkit";  // Import the configureStore function from Redux Toolkit
import taskReducer from "./taskSlice";  // Import the task reducer from the taskSlice file

// Create the Redux store using configureStore
export const store = configureStore({
  reducer: {
    // Add the task reducer to manage the tasks state slice
    tasks: taskReducer,  
  },
});
