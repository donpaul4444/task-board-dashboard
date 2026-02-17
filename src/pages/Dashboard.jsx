import { Navigate, useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";
import { useEffect, useState } from "react";
import { fetchTasksFromAPI } from "../services/taskService";
import TaskColumn from "../components/TaskColumn";
import AddTaskModal from "../components/AddTaskModal";

const Dashboard = () => {
  const tasks = useStore((state) => state.tasks);
  const toggleTaskStatus = useStore((state) => state.toggleTaskStatus);
  const addTask = useStore((state) => state.addTask);

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const completedTasks = tasks.filter((task) => task.status === "completed");
  const inProgressTasks = tasks.filter((task) => task.status === "inprogress");

  const setTasks = useStore((state) => state.setTasks);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const data = await fetchTasksFromAPI();
        setTasks(data);
      } catch (error) {
        setError("Failed to fetch tasks");
        setLoading(false);
      }
    };
    if (tasks.length === 0) {
      loadTasks();
    }
  }, []);
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="h-screen flex bg-gray-100r">
      <div className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">TaskBoard</h2>

        <p className="text-gray-600">Dashboard</p>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <span className="font-medium">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="p-6 flex-1 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Task Board</h1>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(true)}
            >
              Add Task
            </button>
          </div>

          {loading && <p>Loading tasks...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TaskColumn
                title="Todo"
                tasks={todoTasks}
                onMove={toggleTaskStatus}
              />
              <TaskColumn
                title="In Progress"
                tasks={inProgressTasks}
                onMove={toggleTaskStatus}
              />
              <TaskColumn
                title="Completed"
                tasks={completedTasks}
                onMove={toggleTaskStatus}
              />
            </div>
          )}
        </div>
        {showModal && (
          <AddTaskModal onClose={() => setShowModal(false)} onAdd={addTask} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
