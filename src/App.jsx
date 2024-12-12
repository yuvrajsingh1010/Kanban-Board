import React from "react";  // Import React to use JSX syntax
import KanbanBoard from "./components/KanbanBoard";  // Import the KanbanBoard component
import { Provider } from "react-redux";  // Import the Provider component from react-redux to wrap the app with the Redux store
import { store } from "./redux/store";  // Import the Redux store configuration

// Main App component
function App() {
  return (
    // The Provider component makes the Redux store available to any nested components
    <Provider store={store}>
      {/* Render the KanbanBoard component inside the Provider */}
      <KanbanBoard />
    </Provider>
  );
}

export default App;  // Export the App component for use in other parts of the application
