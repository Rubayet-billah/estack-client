import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-5xl font-bold text-center'>Frequently Asked Questions</h1>
            <h1 className='text-3xl my-4'>We get asked a lot of questions, so we thought the easiest thing to do would be to compile them in a quick and easy FAQ.</h1>
            <h2 className='text-2xl font-bold my-3'>WHAT TO LEARN</h2>
            <li className='text-primary'>How do I figure out what to learn?</li>
            <li className='text-primary'>Is it possible to do both graphic design and coding?</li>
            <li className='text-primary'>Should I learn Python 2 or Python 3?</li>
            <li className='text-primary'>Should learn skills in several areas, or focus on one thing in particular? (+ some ideas on what to learn)</li>
            <li className='text-primary'>Where can I learn to code for free?</li>
        </div>
    );
};

export default FAQ;