import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2500,
  });
  import CountUp from 'react-countup';


const User = () => {
    return (
        <div className="container mx-auto mt-16 ">
            <h1 className="text-2xl font-bold text-center pb-8 text-fuchsia-500 lg:text-4xl">Our User</h1>
            <div  className="grid grid-cols-1 gap-5 p-12 md:grid-cols-2 lg:grid-cols-4">


            <div data-aos="fade-up" className="py-5">
                    <div className="rounded-xl bg-violet-900  drop-shadow h-80 w-72 shadow-xl">
                   <div className="p-5 ">
                 <div className="flex justify-center">
                 <img className="h-28 w-28 rounded-full top-5" src="https://i.ibb.co/LzRckYs/icons8-developer-50.png" alt="" />
                 </div>

                 <h3 className='text-2xl text-center font-bold text-white pt-3 '><CountUp end={43} duration={16} /> % </h3>
                  <p className='text-xl font-medium text-center text-white py-2'>of our user is </p>
                   <h3 className='text-2xl text-center font-bold text-white '>Developer</h3>
                  
                   </div>
                    </div>
                  
            </div>

            <div data-aos="fade-up" className="py-5">
                    <div className="rounded-xl bg-violet-900  drop-shadow h-80 w-72 shadow-xl">
                   <div className="p-5 ">
                 <div className="flex justify-center">
                 <img className="h-28 w-28 rounded-full top-5" src="https://i.ibb.co/W6MBjdF/icons8-teacher-50.png" alt="" />
                 </div>

                 <h3 className='text-2xl text-center font-bold text-white pt-3 '><CountUp end={27} duration={14} /> % </h3>
                  <p className='text-xl font-medium text-center text-white py-2'>of our user is </p>
                   <h3 className='text-2xl text-center font-bold text-white '>Teacher</h3>
                  
                   </div>
                    </div>
                  
            </div>

            <div data-aos="fade-up" className="py-5">
                    <div className="rounded-xl bg-violet-900 drop-shadow h-80 w-72 shadow-xl">
                   <div className="p-5 ">
                 <div className="flex justify-center">
                 <img className="h-28 w-28 rounded-full top-5" src="https://i.ibb.co/wchVk1Z/icons8-student-50.png" alt="" />
                 </div>

                 <h3 className='text-2xl text-center font-bold text-white pt-3 '><CountUp end={22} duration={10} /> % </h3>
                  <p className='text-xl font-medium text-center text-white py-2'>of our user is </p>
                   <h3 className='text-2xl text-center font-bold text-white '>Student</h3>
                  
                   </div>
                    </div>
                  
            </div>

            <div data-aos="fade-up" className="py-5">
                    <div className="rounded-xl bg-violet-900  drop-shadow h-80 w-72 shadow-xl">
                   <div className="p-5  ">
                 <div className="flex justify-center">
                 <img className="h-28 w-28 rounded-full  top-5" src="https://i.ibb.co/tBnQk12/icons8-user-50.png" alt="" />
                 </div>
                          <h3 className='text-2xl text-center font-bold text-white pt-3 '><CountUp end={8} duration={5} /> % </h3>
                  <p className='text-xl font-medium text-center text-white py-2'>of our user is </p>
                   <h3 className='text-2xl text-center font-bold text-white '>Others</h3>
                  
                           
                   </div>
                    </div>
                  
            </div>


            </div>
        </div>
    )
    }
        


export default User;