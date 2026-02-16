import { Navigate, useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

const Dashboard = () => {
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
    const navigate =useNavigate()

  const handleLogout =()=>{
    logout()
    navigate("/")
  }
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
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Task board will here...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
