import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../images/crypto-icon.png';

const Sidebar = () => {
    return (
        <aside className="sidebar w-96 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-200" >
            <div className="sidebar-header flex items-center justify-center py-4">
                <div className="inline-flex">
                    <Link to="/" className="inline-flex flex-row items-center">
                        <img className="w-10 h-10" src={icon} alt='Crypto World' />
                        <span className="leading-10 text-gray-900 text-2xl font-bold ml-1 uppercase">CryptoWorld</span>
                    </Link>
                </div>
            </div>
            <div className="sidebar-content px-4 py-6">
                <ul className="flex flex-col w-full">
                    <li className="my-px">
                        <Link to="/" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100" >
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </span>
                            <span className="ml-3 text-black">Dashboard</span>
                        </Link>
                    </li>
                    <li className="my-px">
                        <span className="flex font-medium text-sm text-gray-500 px-4 my-4 uppercase justify-center">Crypto Data</span>
                    </li>
                    <li className="my-px">
                        <Link to="/cryptocurrencies" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700" >
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span className="ml-3 text-black">Cryptocurrency</span>
                        </Link>
                    </li>
                    <li className="my-px">
                        <Link to="/exchanges" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700" >
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                            </span>
                            <span className="ml-3 text-black">Exchanges</span>
                        </Link>
                    </li>
                    <li className="my-px">
                        <Link to="/news" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700" >
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </span>
                            <span className="ml-3 text-black">News</span>
                            <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto" >1k</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
