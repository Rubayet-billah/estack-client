import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from '../Pages/SharedPages/Head';
import Header from '../Pages/SharedPages/Header';

const Main = () => {

    const bgImg = {
        // backgroundImage: "url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=2000')",
        backgroundSize: "cover",
        minHeight: "100vh"
    }
    return (
        <div style={bgImg}>
            {/* <Header></Header> */}
            <Head></Head>
            <section className='container mx-auto'>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Main;

