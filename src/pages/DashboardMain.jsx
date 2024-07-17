import React from 'react';

const DashboardMain = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Overview Cards */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                    <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Transactions</h2>
                    <p className="text-2xl font-bold">$12,345</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Active Agents</h2>
                    <p className="text-2xl font-bold">56</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Total Cash-In</h2>
                    <p className="text-2xl font-bold">$34,567</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Total Cash-Out</h2>
                    <p className="text-2xl font-bold">$23,456</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">New Users</h2>
                    <p className="text-2xl font-bold">78</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
