import React from 'react';  // Import React to use JSX syntax
import ReactDOM from 'react-dom/client';  // Import ReactDOM from 'react-dom/client' to render the app (new for React 18+)
import { Provider } from 'react-redux';  // Import the Provider component from react-redux to wrap the app with the Redux store
import { store } from './redux/store';  // Import the Redux store configuration

import App from './App';  // Import the main App component

// Create a root element for rendering (React 18+)
const root = ReactDOM.createRoot(document.getElementById('root'));  // Get the root DOM element and create a root for React rendering

// Render the app inside the root element
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
