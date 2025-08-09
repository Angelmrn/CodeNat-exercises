"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Paper, Box, Typography, Button, Divider } from "@mui/material";

interface Task {
  id: number;
  taskName: string;
  taskDescription: string;

}

export default function TaskDetail() {
  const params = useParams();
  const router = useRouter();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Obtain the task ID from the URL parameters
  const taskId = params.id;

  useEffect(() => {
    // Load task details from localStorage
    try {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const foundTask = tasks.find((t: Task) => t.id === Number(taskId));

      if (foundTask) {
        setTask(foundTask);
      } else {
        setError("Task not found");
      }
    } catch (err) {
      console.error("Error loading task details:", err);
      setError("Failed to load task details");
    } finally {
      setLoading(false);
    }
  }, [taskId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !task) {
    return (
      <div className="container mx-auto p-4 max-w-md">
        <Paper className="p-6">
          <Typography variant="h5" color="error" gutterBottom>
            {error || "Task not found"}
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            component={Link}
            href="/"
          >
            Back to Dashboard
          </Button>
        </Paper>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Paper className="p-6">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" component="h1">
            Task Details
          </Typography>
          <Button 
            variant="outlined" 
            color="primary"
            component={Link}
            href="/"
          >
            Back to Dashboard
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box mb={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Task ID
          </Typography>
          <Typography variant="body1">{task.id}</Typography>
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Task Name
          </Typography>
          <Typography variant="h6">{task.taskName}</Typography>
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" 
            sx={{ 
              bgcolor: 'background.default', 
              p: 2, 
              borderRadius: 1,
              whiteSpace: 'pre-wrap'
            }}
          >
            {task.taskDescription || "No description provided"}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}