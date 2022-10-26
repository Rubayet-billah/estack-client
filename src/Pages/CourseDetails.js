import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { name } = useLoaderData();
    return (
        <div>
            {name}
        </div>
    );
};

export default CourseDetails;