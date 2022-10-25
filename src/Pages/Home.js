import React from 'react';

const Home = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-50 flex items-center'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold'>Welcome to Crash Learn</h1>
                    <p>It will be enjoyable for you to join us</p>
                    <button className='btn btn-primary mr-3'>Get Start</button>
                    <button className='btn btn-outline btn-primary'>Download App</button>
                </div>
            </div>
            <div className='w-50 flex justify-center items-center'>
                <img src="https://coderthemes.com/appexy/layouts/images/features-1.png" alt="" />
            </div>
        </div>
    );
};

export default Home;