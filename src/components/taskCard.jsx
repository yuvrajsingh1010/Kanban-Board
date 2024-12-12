import React from "react";
import { useDrag } from "react-dnd";  // Importing the useDrag hook from react-dnd for drag-and-drop functionality
import { Box, Typography } from "@mui/material";  // Importing Material UI components for styling

const TaskCard = ({ task }) => {
  // useDrag hook sets up the drag behavior for the task card
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",  // Define the item type as "task" for drag-and-drop
    item: { id: task.id },  // The item to be dragged (in this case, task ID)
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),  // Track whether the item is currently being dragged
    }),
  }));

  return (
    <Box
      ref={drag}  // Attach the drag behavior to this Box component
      sx={{
        padding: 2,  // Padding inside the task card
        marginBottom: 3,  // Increased gap between task cards to prevent overlapping
        border: "1px solid #ccc",  // Border around the task card
        borderRadius: "12px",  // Rounded corners for the card
        backgroundColor: isDragging ? "#e0f7fa" : "#ffffff",  // Change background color when dragging
        cursor: "grab",  // Change cursor to indicate drag capability
        boxShadow: isDragging
          ? "0px 8px 15px rgba(0, 0, 0, 0.2)"  // Larger shadow when dragging for emphasis
          : "0px 4px 10px rgba(0, 0, 0, 0.1)",  // Default shadow for the task card
        transition: "background-color 0.3s, box-shadow 0.3s",  // Smooth transition for background color and shadow
        maxWidth: { xs: "100%", sm: "80%", md: "100%" },  // Responsive width for different screen sizes
        wordWrap: "break-word",  // Ensure text doesn't overflow and wraps within the card
      }}
    >
      {/* Task title */}
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },  // Responsive font size based on screen size
          fontWeight: "bold",  // Bold text for emphasis
          color: "#00796b",  // Color for the title
          textAlign: "center",  // Center-align the title text
        }}
      >
        {task.title}  {/* Display the task title */}
      </Typography>

      {/* Task description */}
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },  // Responsive font size for description
          color: "#555555",  // Dark gray color for the description text
          marginTop: 1,  // Space between the title and the description
        }}
      >
        {task.description}  {/* Display the task description */}
      </Typography>
    </Box>
  );
};

export default TaskCard;  // Export the TaskCard component to be used in other parts of the app
