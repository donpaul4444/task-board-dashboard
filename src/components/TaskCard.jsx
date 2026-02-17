import React from "react";

const TaskCard = ({ task, onMove, onEdit, onDelete }) => {
  return (
    <div key={task.id} className="p-3 mb-3 bg-gray-100 rounded">
      <p>{task.title}</p>
      <div className="flex gap-3 mt-2 text-sm">
        <button className=" text-blue-500" onClick={() => onMove(task.id)}>
          Move
        </button>
        <button onClick={() => onEdit(task)} className="text-yellow-600">
          Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
