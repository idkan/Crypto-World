import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

import { Cryptocurrencies, LoadingButton, News } from '.';

const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return (<LoadingButton />);

    return (
        <>
            <div className="main-content flex flex-col flex-grow p-4">
                <h1 className="font-bold text-2xl text-gray-700">Global Crypto Stats</h1>
                <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4 p-2" >
                    <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        <div className="flex flex-col justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                            <h2>Total Cryptocurrencies</h2>
                            <span>{(globalStats.total).toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                            <h2>Total Exchanges</h2>
                            <span>{millify(globalStats.totalExchanges)}</span>
                        </div>
                        <div className="flex flex-col justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                            <h2>Total Market Cap</h2>
                            <span>{millify(globalStats.totalMarketCap)}</span>
                        </div>
                        <div className="flex flex-col justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                            <h2>Total 24h Volume</h2>
                            <span>{millify(globalStats.total24hVolume)}</span>
                        </div>
                        <div className="flex flex-col justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                            <h2>Total Markets</h2>
                            <span>{millify(globalStats.totalMarkets)}</span>
                        </div>
                    </div>
                    <div className="second-content flex flex-row justify-between items-center">
                        <h2 className="font-bold text-xl text-gray-700">Top 10 Cryptocurrencies in the world</h2>
                        <Link to='/cryptocurrencies' className="text-sm text-gray-500 transition-colors hover:text-gray-900">Show More</Link>
                    </div>
                    <Cryptocurrencies simplified />
                    <div className="second-content flex flex-row justify-between items-center">
                        <h2 className="font-bold text-xl text-gray-700">Latest Crypto News</h2>
                        <Link to='/news' className="text-sm text-gray-500 transition-colors hover:text-gray-900">Show More</Link>
                    </div>
                    <News simplified />
                </div>
            </div>
        </>
    );
};

export default HomePage;
