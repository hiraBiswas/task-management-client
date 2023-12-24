// TaskCard.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskCard = ({ tasks }) => {
  return (
    <div className="shadow-2xl px-6 py-6 mt-10 min-h-96 bg-violet-900 text-white drop-shadow rounded-xl grid gap-12 grid-cols-1">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskCard;
