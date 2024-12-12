import React, { useState } from "react";  // Import React and the useState hook for managing local state
import { useDispatch } from "react-redux";  // Import the useDispatch hook from react-redux to dispatch actions
import { addTask } from "../redux/taskSlice";  // Import the action creator for adding a task
import { Box, Button, TextField, Modal, Typography } from "@mui/material";  // Import Material-UI components

// AddTaskModal component for creating new tasks
const AddTaskModal = ({ open, onClose }) => {
  const dispatch = useDispatch();  // Initialize dispatch for sending actions to Redux
  const [title, setTitle] = useState("");  // Local state for the task title
  const [description, setDescription] = useState("");  // Local state for the task description
  const [error, setError] = useState("");  // Local state for error message

  // Handle form submission to add a new task
  const handleSubmit = () => {
    // Check if either the title or description is empty
    if (!title || !description) {
      setError("Both title and description are required.");  // Set error message
      return;  // Prevent form submission if validation fails
    }

    // Dispatch the action to add a new task with a unique ID, title, description, and initial stage ("To Do")
    dispatch(
      addTask({ id: Date.now().toString(), title, description, stage: "To Do" })
    );
    setTitle("");  // Reset the title field
    setDescription("");  // Reset the description field
    setError("");  // Clear any previous error messages
    onClose();  // Close the modal after submission
  };

  return (
    // Modal component from Material-UI for displaying the form
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",  // Center the modal on the screen
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",  // Use CSS transform to center the modal perfectly
          width: { xs: "90%", sm: "80%", md: "50%", lg: "40%" },  // Set width based on screen size (responsive)
          bgcolor: "#ffffff",  // Set background color to white
          p: 4,  // Add padding inside the modal
          borderRadius: 3,  // Round the corners of the modal
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",  // Apply a subtle shadow for better visibility
        }}
      >
        {/* Modal header */}
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Add New Task
        </Typography>

        {/* Task Title Input Field */}
        <TextField
          fullWidth  // Make the input field take full width
          label="Task Title"  // Label for the input field
          value={title}  // Bind the input value to the local state `title`
          onChange={(e) => setTitle(e.target.value)}  // Update the title state on change
          sx={{
            marginBottom: 2,  // Add space below the input field
            backgroundColor: "#f9f9f9",  // Set the background color of the input field
            borderRadius: 1,  // Round the corners of the input field
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: "#cccccc",  // Set default border color
              },
              '&:hover fieldset': {
                borderColor: "#888888",  // Change border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: "#666666",  // Change border color when focused
              },
            },
          }}
        />
        
        {/* Task Description Input Field */}
        <TextField
          fullWidth  // Make the input field take full width
          label="Task Description"  // Label for the input field
          value={description}  // Bind the input value to the local state `description`
          multiline  // Allow multiple lines of text
          rows={4}  // Set the number of rows for the multiline text input
          onChange={(e) => setDescription(e.target.value)}  // Update the description state on change
          sx={{
            marginBottom: 2,  // Add space below the input field
            backgroundColor: "#f9f9f9",  // Set the background color of the input field
            borderRadius: 1,  // Round the corners of the input field
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: "#cccccc",  // Set default border color
              },
              '&:hover fieldset': {
                borderColor: "#888888",  // Change border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: "#666666",  // Change border color when focused
              },
            },
          }}
        />

        {/* Display error message if validation fails */}
        {error && (
          <Typography sx={{ color: "red", textAlign: "center", marginBottom: 2 }}>
            {error}
          </Typography>
        )}

        {/* Add Task Button */}
        <Button
          variant="contained"
          onClick={handleSubmit}  // Trigger handleSubmit when clicked
          fullWidth  // Make the button take full width
          sx={{
            mt: 2,  // Add margin-top to space it from the fields above
            padding: 1.5,  // Add padding inside the button
            backgroundColor: "#1976d2",  // Set button color
            fontWeight: "bold",  // Make the text bold
            '&:hover': {
              backgroundColor: "#115293",  // Darken the button color on hover
            },
          }}
        >
          Add Task  {/* Button text */}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;  // Export the component to be used elsewhere in the app
