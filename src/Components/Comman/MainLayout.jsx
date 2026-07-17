import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20 flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;