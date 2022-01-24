import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer px-4 py-6">
            <div className="footer-content">
                <p className="text-sm text-gray-600 text-center">© CryptoWorld 2022. All rights reserved. <a href="https://github.com/idkan">by idkan</a></p>
                <div className="flex justify-center">
                    <Link to="/" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100" >
                        <span className="text-sm text-gray-500 transition-colors hover:text-gray-900">Dashboard</span>
                    </Link>
                    <Link to="/exchanges" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100" >
                        <span className="text-sm text-gray-500 transition-colors hover:text-gray-900">Exchanges</span>
                    </Link>
                    <Link to="/news" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100" >
                        <span className="text-sm text-gray-500 transition-colors hover:text-gray-900">News</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
