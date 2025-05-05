import Sidebar from '@/components/DashboardSidebar';
import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';

const DashboardLayout = ({ children }) => {
    return (
        <div>
        <Header/>
        <div style={{ display: 'flex', padding: '4px' }}>
            <Sidebar />
            <main style={{ padding: '4px', height:"85vh" , overflowY: 'auto' }}>
                {children}
            </main>
        </div>
        </div>
    );
};

export default DashboardLayout;