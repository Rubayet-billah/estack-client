import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AsideList from './AsideList';

const Aside = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses)

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <ul className="menu bg-base-200 w-56 rounded">
                <h2 className='text-3xl text-center'>All Courses</h2>
                {
                    courses.map(cs => <AsideList
                        key={cs.id}
                        course={cs}
                    ></AsideList>)
                }
            </ul>
        </div>
    );
};

export default Aside;