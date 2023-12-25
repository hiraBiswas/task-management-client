// ManageTask.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import TaskCard from './TaskCard';
import DropTarget from './DropTarget';

const ManageTask = () => {
  const { user } = useContext(AuthContext);
  const [addedTask, setAddedTask] = useState([]);

  useEffect(() => {
    // Fetch task data for the user
    fetch(`http://localhost:5000/toDo?email=${user.email}`)
      .then(response => response.json())
      .then(data => setAddedTask(data))
      .catch(error => console.error('Error fetching task data:', error));
  }, [user]);

  const handleDropToOngoing = (item) => {
    // Handle drop to Ongoing
    console.log('Dropped to Ongoing:', item);
  };

  const handleDropToCompleted = (item) => {
    // Handle drop to Completed
    console.log('Dropped to Completed:', item);
  };

  return (
    <div className="container mx-auto mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
      <div className="max-w-sm">
        <h2 className="text-2xl font-bold text-fuchsia-500 text-center">To Do List</h2>
        <TaskCard tasks={addedTask} />
      </div>
     <div>
     <h2 className="text-2xl font-bold text-fuchsia-500 text-center">Ongoing Task</h2>
     <DropTarget onDrop={handleDropToOngoing}>
        
      </DropTarget>
     </div>
    <div>
    <h2 className="text-2xl font-bold text-fuchsia-500 text-center">Completed Task</h2>
    <DropTarget onDrop={handleDropToCompleted}>
       
      </DropTarget>
    </div>
    </div>
  );
};

export default ManageTask;
