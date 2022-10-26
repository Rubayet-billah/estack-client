import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPages/Header';

const Main = () => {

    const bgImg = {
        // backgroundImage: "url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=2000')",
        backgroundSize: "cover",
        minHeight: "100vh"
    }
    return (
        <div style={bgImg}>
            <Header></Header>
            <section className='container mx-auto'>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Main;

