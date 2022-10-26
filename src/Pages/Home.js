import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='flex flex-col p-5 md:flex-row'>
            <div className='md:w-1/2 flex items-center'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold'>Welcome to Crash Learn</h1>
                    <p>It will be enjoyable for you to join us . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, repellendus dolorum libero quae, corrupti non error porro doloremque ipsam deleniti ea debitis. Illum repellat libero laboriosam, quo eveniet dolore officiis.</p>
                    <Link to='/courses'>
                        <button className='btn btn-primary mr-3'>Get Start</button>
                    </Link>
                    <button className='btn btn-outline btn-primary'>
                        Download App
                    </button>
                </div>
            </div>
            <div className='md:w-1/2 flex justify-center items-center mt-8'>
                <img src="https://coderthemes.com/appexy/layouts/images/features-1.png" alt="" />
            </div>
        </div>
    );
};

export default Home;