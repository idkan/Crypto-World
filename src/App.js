import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './index.css';

import { Sidebar, Dashboard, Footer } from './components';

const App = () => {
    return (
        <div className="app flex flex-row min-h-screen bg-gray-100 text-gray-800">
            <Sidebar />
            <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                <Dashboard />
                <Footer />
            </main>
        </div>
    );
};

export default App;
