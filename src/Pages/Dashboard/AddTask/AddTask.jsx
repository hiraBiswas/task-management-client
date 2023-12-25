import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../../Providers/AuthProvider';


const AddTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [deadline, setDeadline] = useState(null);
    const { user, logOut } = useContext(AuthContext);

    const handleAddTruck = async (data) => {
        try {
            const title = data.title;
            const priority = data.priority;
            const description = data.description;
            const email = user.email;

            // Post the new truck data to your server
            const newTruckResponse = await fetch('http://localhost:5000/toDo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    deadline: deadline ? deadline.toISOString() : null,
                    priority,
                    description,
                    title,
                    email,
                }),
            });

            if (newTruckResponse.ok) {
                const responseData = await newTruckResponse.json(); // First read
                console.log('Response Data:', responseData);

                if (responseData.insertedId) {
                    // show success popup
                    reset(); // Clear the form
                    setDeadline(null); // Reset the deadline state
                    toast.success('Task added to the database');
                } else {
                    toast.error('Task could not be added');
                }
            } else {
                console.log('Error response from server:', newTruckResponse.status);
                toast.error('Failed to add task.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to add task.');
        }
    };    
      return (
        <div className="mt-10 max-w-4xl lg:mt-12   rounded-2xl drop-shadow">
          <h1 className="mx-auto p-10 text-fuchsia-600 font-semibold text-center text-2xl lg:text-4xl">Add New Product</h1>
          <form onSubmit={handleSubmit(handleAddTruck)} className="w-full ">
      
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-fuchsia-500 font-bold text-xl">Title</span>
            </label>
            <input
              type="text"
              {...register('title', { required: true })}
              className="input input-bordered"
            />
          </div>

          <div className="form-control ">
  <label className="label">
    <span className="label-text text-fuchsia-500 font-bold text-xl">Priority</span>
  </label>
  <select {...register('priority', { required: true })} className="select select-bordered w-full ">
    <option disabled selected value="">
      Select an option
    </option>
    <option value="high">High</option>
    <option value="moderate">Moderate</option>
    <option value="low">Low</option>
  </select>
</div>


<div className="form-control">
  <label className="label">
    <span className="label-text text-fuchsia-500 font-bold text-xl">Deadline</span>
  </label>
  <DatePicker
    selected={deadline}
    onChange={(date) => setDeadline(date)}
    minDate={new Date()} // Set minDate to prevent selecting past dates
    className="input input-bordered w-full"
  />
</div>

<div className="form-control ">
            <label className="label">
              <span className="label-text text-fuchsia-500 font-bold text-xl">Description</span>
            </label>
            <input
              type="text"
              {...register('description', { required: true })}
              className="input input-bordered"
            />
          </div>

        {/* ... (rest of the form controls) ... */}

        <div className="form-control mt-6">
          <button className="btn bg-fuchsia-600 drop-shadow">Add Product</button>
        </div>
      </form>
                 
          <ToastContainer />
        </div>
      );
    };
    

export default AddTask;