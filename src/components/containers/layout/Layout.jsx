import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div className='main content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
