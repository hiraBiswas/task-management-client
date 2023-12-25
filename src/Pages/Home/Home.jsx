import React from 'react';
import User from './User/User';
import FAQ from './FAQ/FAQ';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <FAQ></FAQ>
           <User></User>
        </div>
    );
};

export default Home;