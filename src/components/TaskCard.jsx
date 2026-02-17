import React from "react";

const TaskCard = ({task,onMove}) => {
  return (
    <div key={task.id} className="p-3 mb-3 bg-gray-100 rounded">
      <p>{task.title}</p>
      <button
        className="mt-2 text-sm text-blue-500"
        onClick={() => onMove(task.id)}
      >
        Move
      </button>
    </div>
  );
};

export default TaskCard;
