import React from "react";
import { useDispatch } from "react-redux";  // Import the useDispatch hook from Redux
import { setSearchQuery } from "../redux/taskSlice";  // Action to update the search query in Redux state
import { TextField, Box, Typography } from "@mui/material";  // Import Material UI components for styling

const SearchBar = () => {
  const dispatch = useDispatch();  // Initialize the dispatch function to send actions to Redux

  // Function to handle search input change and dispatch the new search query
  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));  // Dispatch the updated search query to Redux store
  };

  return (
    <Box
      sx={{
        display: "flex",  // Use flexbox to align items
        flexDirection: "column",  // Stack children vertically
        justifyContent: "center",  // Center the items horizontally
        alignItems: "center",  // Center the items vertically
        width: "100%",  // Make the box full width
        marginBottom: 4,  // Bottom margin for spacing
        padding: 3,  // Padding inside the search bar container
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",  // Gradient background for visual appeal
        borderRadius: "16px",  // Rounded corners for the container
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",  // Subtle shadow effect for depth
        overflow: "hidden",  // Hide any content overflowing the container
        boxSizing: "border-box",  // Include padding and border in element's total width and height
      }}
    >
      {/* Title for the search bar */}
      <Typography
        variant="h5"  // Typography variant for the heading
        sx={{
          color: "#ffffff",  // White text color
          marginBottom: 2,  // Space below the title
          fontWeight: "bold",  // Bold font weight for emphasis
          textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",  // Soft shadow behind text for readability
        }}
      >
        Search for Tasks
      </Typography>

      {/* Input field for searching tasks */}
      <TextField
        fullWidth  // Make the input field take up the full width of its container
        placeholder="Search tasks..."  // Placeholder text to guide users
        onChange={handleSearch}  // Update the search query in Redux state on input change
        variant="outlined"  // Use outlined style for the input field
        sx={{
          maxWidth: { xs: "100%", sm: "80%", md: "60%" },  // Responsive width for different screen sizes
          backgroundColor: "#ffffff",  // White background for the input field
          borderRadius: "8px",  // Rounded corners for the input field
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",  // Light shadow for the input field
          '& .MuiOutlinedInput-root': {  // Styles for the outlined input root
            '& fieldset': {
              borderColor: "#ff9a9e",  // Default border color
            },
            '&:hover fieldset': {
              borderColor: "#ff6f61",  // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: "#ff3d00",  // Border color when the input field is focused
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;  // Export the SearchBar component to be used in other parts of the app
