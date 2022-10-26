import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { name, img, duration, credit, details, fee } = useLoaderData();
    return (
        <div>
            <div className='my-8'>
                <h2 className='text-center text-3xl md:text-6xl'>Here is course details.Just Enroll now and your journey will begin with us.</h2>
            </div>
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-between">
                        <h2 className='text-primary text-4xl font-bold'>${fee}</h2>
                        <button className="btn btn-primary">Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;