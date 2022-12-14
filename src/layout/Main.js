import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPages/Header';

const Main = () => {

    return (
        <div className='min-h-screen'>
            <Header></Header>
            <section className='container mx-auto'>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Main;

