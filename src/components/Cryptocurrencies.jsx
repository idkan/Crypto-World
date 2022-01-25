import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

    console.log(cryptos);

    return (
        <>
            <div className="main-content flex flex-col flex-grow p-4">
                <h1 className="font-bold text-2xl text-gray-700">Cryptocurrencies</h1>
                <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4" >
                    <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {cryptos.map((crypto, i) => (
                            <Link to={`/crypto/${crypto.uuid}`} key={crypto.uuid}>
                                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 ">
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