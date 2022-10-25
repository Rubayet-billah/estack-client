import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                courses.map(cs => <SingleCourse
                    key={cs.id}
                    course={cs}
                ></SingleCourse>)
            }
        </div>
    );
};

export default Courses;