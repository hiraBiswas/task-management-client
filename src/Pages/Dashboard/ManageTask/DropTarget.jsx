// DropTarget.jsx
import React from 'react';
import { useDrop } from 'react-dnd';

const DropTarget = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`${
        isOver ? 'bg-green-500' : 'bg-violet-900'
      } shadow-2xl px-6 py-6 mt-10 bg-violet-900 text-white min-h-96 drop-shadow rounded-xl grid gap-12 grid-cols-1`}
    >
      {children}
    </div>
  );
};

export default DropTarget;
