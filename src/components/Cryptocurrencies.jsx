import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

import { LoadingButton } from '.';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm));

        setCryptos(filteredData);

    }, [cryptosList, searchTerm])

    if (isFetching) return (<LoadingButton />);

    const containerClasses = !simplified ? 'border-4 border-gray-400 border-dashed' : '';
    const paddingContainer = !simplified ? 'p-4' : '';

    return (
        <>
            <div className={"crypto-content flex flex-col flex-grow " + paddingContainer}>
                {!simplified && (
                    <div>
                        <h1 className="font-bold text-2xl text-gray-700">Cryptocurrencies</h1>
                        <input
                            type="text"
                            name="searchTerm"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm md:w-80 focus:ring-1"
                            placeholder="Search Cryptocurrency"
                            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                        />
                    </div>
                )}
                <div className={"flex flex-col flex-grow bg-white mt-4 p-2 " + containerClasses} >
                    <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {cryptos?.map((crypto, i) => (
                            <Link to={`/crypto/${crypto.uuid}`} key={crypto.uuid} className="grid">
                                <div className="max-w-md py-4 px-8 bg-white rounded-3xl border shadow-md hover:shadow-lg mt-16 self-center justify-center w-full">
                                    <div className="flex justify-center md:justify-end -mt-16">
                                        <img className="w-20 h-20 object-cover rounded-full" src={crypto.iconUrl} alt={crypto.name} />
                                    </div>
                                    <div>
                                        <h2 className="text-gray-800 text-2xl font-semibold whitespace-nowrap text-ellipsis overflow-hidden">{crypto.rank}. {crypto.name}</h2>
                                        <p className="mt-2 text-gray-600">Price: {millify(crypto.price)}</p>
                                        <p className="mt-2 text-gray-600">Market Cap: {millify(crypto.marketCap)}</p>
                                        <p className="mt-2 text-gray-600">Daily Change: {millify(crypto.change)}%</p>
                                    </div>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cryptocurrencies;
