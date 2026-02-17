import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, onMove,onEdit ,onDelete}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">{title}</h2>
      {tasks.length === 0 && <p className="text-gray-400 text-sm">No Tasks</p>}
      {tasks.map((task) => (
        <TaskCard
         key={task.id}
          task={task} 
          onMove={onMove}
          onEdit={onEdit}
          onDelete={onDelete}
          />
      ))}
    </div>
  );
};

export default TaskColumn;
