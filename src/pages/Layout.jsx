import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import './styles/layout.css'
const Layout = ({children}) => {
    return (
        <div className='flex flex-col min-h-screen w-screen box-border'>
            <Navigationbar/>
            <main className='flex-grow p-8 bg-[#f5f7fa]'>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;