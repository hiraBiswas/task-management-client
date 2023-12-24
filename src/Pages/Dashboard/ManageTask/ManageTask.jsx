import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import TaskCard from './TaskCard';

const ManageTask = () => {

    const { user, logOut } = useContext(AuthContext);
    const [addedTask, setAddedTask] = useState([]);
   
    

    useEffect(() => {
        fetch('http://localhost:5000/toDo')
            .then(response => response.json())
            .then(data => {
                const userAddedItems = data.filter(item => item.email === user.email);
                setAddedTask(userAddedItems);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, []);

    console.log(addedTask)
    return (
        <div className='container mx-auto mt-10  grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-16'>

            <div className='max-w-sm'>
                <h2 className='text-2xl font-bold text-fuchsia-500 text-center'>To Do List</h2>
                <div draggable className="shadow-2xl px-6 py-6 mt-10 min-h-96 bg-violet-900 text-white  drop-shadow rounded-xl grid gap-12 grid-cols-1 ">
                    {addedTask.map(task => (
                        <TaskCard key={task._id} task={task}></TaskCard>
                    ))}
                    </div>


            </div>
            

            <div className='max-w-sm '>
            <h2 className='text-2xl font-bold text-fuchsia-500 text-center'>Ongoing Task</h2>
            <div className="shadow-2xl px-6 py-6 mt-10 bg-violet-900 text-white  min-h-96 drop-shadow rounded-xl grid gap-12 grid-cols-1 ">
                  
                    </div>
            </div>


            <div className='max-w-sm '>
            <h2 className='text-2xl font-bold text-fuchsia-500 text-center'>Completed Task</h2>
            <div className="shadow-2xl px-6 py-6 mt-10 bg-violet-900 text-white  min-h-96 drop-shadow rounded-xl grid gap-12 grid-cols-1 ">
                  
                    </div>
            </div>
        </div>
    );
};

export default ManageTask;