import { useDrag } from 'react-dnd';
import React from 'react';
const TaskItem = ({ task }) => {
    const { id, title, priority, deadline, description } = task;


  
    const [{ isDragging }, drag] = useDrag({
      type: 'TASK',
      item: { id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });
  
    console.log('TaskItem isRendering:', task);
  
    return (
      <div
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className="drop-shadow text-white bg-fuchsia-800 rounded-lg p-3"
      >
        <h2 className="font-bold text-white text-xl">{title}</h2>
        <h2>{priority}</h2>
        <h2>{deadline}</h2>
        <h2 className="text-gray-300">{description}</h2>
      </div>
    );
  };
export default TaskItem  