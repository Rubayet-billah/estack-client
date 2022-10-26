import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { id, name, img, details, fee, duration, credit } = course;
    return (
        <div className='m-3 rounded-lg border border-gray-900'>
            <img className='rounded-lg' src={img} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl my-2'>{name}</h2>
                <div className='flex justify-between'>
                    <div>
                        <p>Credit: {credit}</p>
                        <p>Duration: {duration}h</p>
                    </div>
                    <Link to={`/courses/${id}`}><button className='btn btn-outline'>see details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;