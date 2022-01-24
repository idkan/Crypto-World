import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div className="main-content flex flex-col flex-grow p-4">
                <h1 className="font-bold text-2xl text-gray-700">Global Crypto Stats</h1>
                <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4 p-2" >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">1</div>
                        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">2</div>
                        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">3</div>
                        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">4</div>
                        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">5</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
