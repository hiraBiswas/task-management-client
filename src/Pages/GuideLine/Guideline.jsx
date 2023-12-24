import React from 'react';

const Guideline = () => {
    return (
        <div className='container mx-auto mt-12 lg:mt-20'>
                    <div className='flex-1'>
            <h1 className=' text-2xl font-bold text-center text-fuchsia-500 pb-8 lg:text-4xl lg:pb-12'>{`User's Common Inquiry`}</h1>
            <div className="collapse collapse-plus bg-base-200 mb-3 py-5">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
   <p>What is first step to use TaskMaster?</p>
  </div>
  <div className="collapse-content"> 
    <p>User need to login to use functionality of TaskMaster.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 mb-3">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
   The functionalities of Taskmaster?
  </div>
  <div className="collapse-content"> 
    <p>It allows user to add task, delete, move it to ongoing or completed task.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 mb-3">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How many task we can add at a time?
  </div>
  <div className="collapse-content"> 
    <p>As many as you like, no limitation.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Guideline;