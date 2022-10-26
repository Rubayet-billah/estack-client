import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from './Aside';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses)
    return (
        <div className='md:flex'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    courses.map(cs => <SingleCourse
                        key={cs.id}
                        course={cs}
                    ></SingleCourse>)
                }
            </div>
            <div className='hidden md:block ml-5 mt-3'>
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Courses;