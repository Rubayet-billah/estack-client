import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { id, name, img, details, instructor, fee } = useLoaderData();
    return (
        <div className='my-5'>
            <div className='mx-4 my-8'>
                <h2 className='text-center text-3xl md:text-6xl'>Here is course details.Just Enroll now and your journey will begin with us.</h2>
            </div>
            <div className="card card-compact mx-4 md:w-96 md:mx-auto bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <h3 className='text-2xl font-semibold'>Instructor: {instructor}</h3>
                    <div className="card-actions justify-between">
                        <h2 className='text-primary text-4xl font-bold'>${fee}</h2>
                        <Link to={`/checkout/${id}`}><button className='btn btn-primary'>Get Premium Access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;