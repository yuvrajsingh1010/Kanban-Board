import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { updateTaskStage } from "../redux/taskSlice"; 
import TaskCard from "./taskCard"; 
import SearchBar from "./SearchBar"; 
import { DndProvider, useDrop } from "react-dnd"; 
import { HTML5Backend } from "react-dnd-html5-backend"; 
import { Box, Button, Grid } from "@mui/material"; 
import AddTaskModal from "./AddTaskModal"; 

// List of task stages in the Kanban board
const stages = ["To Do", "In Progress", "Peer Review", "Done"];

// Array of background colors for the columns
const columnColors = [
  "#E1F5FE", // Light Blue
  "#F1F8E9", // Light Green
  "#FFF3E0", // Light Orange
  "#E8EAF6", // Light Purple
];

const KanbanBoard = () => {
  const dispatch = useDispatch();  
  const tasks = useSelector((state) => state.tasks.tasks);  
  const searchQuery = useSelector((state) => state.tasks.searchQuery);  

  const [openModal, setOpenModal] = useState(false);  

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle task movement between stages
  const moveTask = (id, stage) => {
    dispatch(updateTaskStage({ id, stage }));  
  };

  return (
    <div className="app-container">
      <DndProvider backend={HTML5Backend}>
        <Box sx={{ padding: 2, marginBottom: "50px" }}>
          <SearchBar />  {/* Search bar for filtering tasks */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}  // Opens modal to add new task
            sx={{ margin: "16px 0" }}
          >
            Add New Task
          </Button>

          {/* Grid layout for columns based on task stages */}
          <Grid container spacing={3} sx={{ marginBottom: 3 }}>
            {stages.map((stage, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={stage}
                sx={{ marginBottom: { xs: 8, sm: 0 } }}
              >
                <Column
                  stage={stage}  // Current task stage
                  tasks={filteredTasks.filter((task) => task.stage === stage)}  // Filter tasks by stage
                  moveTask={moveTask}  // Pass down function to move tasks
                  columnColor={columnColors[index % columnColors.length]}  // Assign color from the list
                />
              </Grid>
            ))}
          </Grid>

          {/* Modal for adding a new task */}
          {openModal && (
            <AddTaskModal open={openModal} onClose={() => setOpenModal(false)} />
          )}
        </Box>
      </DndProvider>
    </div>
  );
};

const Column = ({ stage, tasks, moveTask, columnColor }) => {
  const [, drop] = useDrop({
    accept: "task",  // Define draggable item type as 'task'
    drop: (item) => moveTask(item.id, stage),  // Move task to the specified stage
  });

  return (
    <Box
      ref={drop}  // Set the drop target for task cards
      sx={{
        height: "100%",
        minHeight: "250px",  // Minimum height for the column
        padding: 3,
        border: "1px solid lightgray",  // Light border for the column
        borderRadius: "8px",  // Rounded corners for the column
        backgroundColor: columnColor,  // Use the passed column color
        display: "flex",
        flexDirection: "column",
        gap: 3,
        marginBottom: "20px",  // Add margin at the bottom of each column
      }}
    >
      <h3 style={{ textAlign: "center" }}>{stage}</h3>  {/* Display the stage title */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />  // Render task cards under the current column
      ))}
    </Box>
  );
};

export default KanbanBoard;  // Export the KanbanBoard component
