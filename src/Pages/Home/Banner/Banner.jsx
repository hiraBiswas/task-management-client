import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' relative'
           style={{
          backgroundImage: "url('https://i.ibb.co/RcJgG4D/149-Photo-Room.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height:'100vh'
        }}>
            <div className='absolute left-5 top-32 lg:left-20 lg:top-64'>
  
  <div className='max-w-sm bg-blend-darken lg:max-w-xl  '>
                    <h2 className='text-2xl font-bold text-start text-white lg:text-5xl'>Mastering Tasks,<br></br> Empowering Success.</h2>
                    <p className='text-sm  py-4 text-gray-300 text-start lg:hidden '> Our platform equips you with the tools to efficiently manage your tasks, set priorities, and optimize productivity.</p>
                    <p className='text-sm hidden  py-4 text-gray-300 text-start lg:text-lg lg:py-8 lg:block'> At ProTaskMasters, we believe in mastering tasks to empower your journey toward success. Our platform equips you with the tools to efficiently manage your tasks, set priorities, and optimize productivity. Join the league of task masters and unleash your full potential with ProTaskMasters. </p>
                    <Link to="/login">
                <button className="btn bg-fuchsia-500 border-none px-6 py-3 text-white hover:bg-white hover:text-fuchsia-500">{`Let's Explore`}</button>
              </Link>
          </div>
  </div>
        </div>
    );
};

export default Banner;