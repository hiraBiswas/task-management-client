import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2500,
  });


const FAQ = () => {
    return (
        <div data-aos="fade-up" className='container mx-auto mt-10 lg:mt-16'>
           <div className='flex flex-col lg:flex-row'>

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





            <div className='flex-1'>
            <h1 className=' text-2xl font-bold text-center text-fuchsia-500 pb-8 lg:text-4xl lg:pb-12'>Process of Task Management</h1>
            <ul className="timeline timeline-vertical">
  <li>
    <div className="timeline-start timeline-box">Register or login to your account</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr className="bg-primary"/>
  </li>
  <li>
  <hr className="bg-primary"/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">Dashboard</div>
    <hr className="bg-primary"/>
  </li>
  <li>
    <hr className="bg-primary"/>
    <div className="timeline-start timeline-box">Add task</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">View to-do list</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">Move task from to-do list to ongoing</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
  </li>

  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">Move task from ongoing to complete.</div>
    <hr/>
  </li>
</ul>
            </div>
           </div>
            
        </div>
    );
};

export default FAQ;