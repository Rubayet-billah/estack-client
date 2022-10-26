import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { id } = course;
    return (
        <div className=' p-8 m-3 rounded border border-gray-900'>
            <h2 className='text-4xl'>Single <br />Course</h2>
            <Link to={`/courses/${id}`}><button className='btn btn-outline'>Get Course</button></Link>
        </div>
    );
};

export default SingleCourse;