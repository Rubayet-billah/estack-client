import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';


const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='flex flex-col p-5 md:flex-row'>
            <div className='md:w-1/2 flex justify-center items-center mt-8'>



                <img src="https://coderthemes.com/appexy/layouts/images/features-1.png" alt="" />
            </div>
            <div className='md:w-1/2 flex items-center'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold'>Welcome to EStack</h1>
                    <p className='my-3'>It will be enjoyable for you to join us . Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today. 30-Day Money Guarantee. Lifetime Access. Download To Your Phone. Courses in 60+ Languages</p>
                    <Link to='/courses'>
                        <button className='btn btn-primary mr-3'>Get Start</button>
                    </Link>
                    <button className='btn btn-outline btn-primary'>
                        Download App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;