import React from 'react';

const TaskCard = ({task}) => {
    const {priority, deadline, description, title} = task
    return (
        <div draggable className='drop-shadow  text-white bg-fuchsia-800  rounded-lg p-3'>
            <h2 className='font-bold  text-white text-xl'>{title}</h2>
            <h2>{priority}</h2>
            <h2>{deadline}</h2>
            <h2 className='text-gray-300'>{description}</h2>
            
        </div>
    );
};

export default TaskCard;