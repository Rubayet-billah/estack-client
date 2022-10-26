import React from 'react';
import { Link } from 'react-router-dom';

const AsideList = ({ course }) => {
    return (
        <div className='border-2 rounded my-1'>
            <li className='text-xl'><Link
                to={`/courses/${course.id}`}
            >{course.name}</Link></li>
        </div>
    );
};

export default AsideList;