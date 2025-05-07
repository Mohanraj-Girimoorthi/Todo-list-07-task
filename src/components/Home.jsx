import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  TextField,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddOrUpdateTask = () => {
    if (!input.trim()) return;
    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = input;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(204, 203, 203, 0.09)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={700} sx={{ color: "black" }}>
            Todo-App
          </Typography>
          <Button onClick={handleLogout}  variant="outlined" sx={{ color: "black", border:"2px black solid", textTransform: "none" ,  "&:hover": {
          bgcolor: "black" , color:"white ",
        }, }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box mt={4} textAlign="center">
          <Typography variant="h5" fontWeight={600} mb={3}>
            Manage Your Tasks
          </Typography>

          <Box display="flex" gap={2} mb={3}>
            <TextField
              fullWidth
              label="Enter a task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "#DB4C3F", "&:hover": { bgcolor: "#c33c30" } }}
              onClick={handleAddOrUpdateTask}
            >
              {editingIndex !== null ? "Update" : "Add"}
            </Button>
          </Box>

          <Box display="flex" flexDirection="column" gap={2}>
            {tasks.map((task, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: "#f9f9f9",
                  boxShadow: "0 2px 8px rgba(73, 56, 59, 0.14)",
                  borderRadius: "12px",
                  px: 2,
                  py: 1.5,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16 }}>{task}</Typography>
                <Box>
                  <IconButton onClick={() => handleEdit(index)} sx={{ color: blue[500] }}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)} sx={{ color: "#DB4C3F" }}>
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
