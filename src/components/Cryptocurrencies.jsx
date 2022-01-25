import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery();

    return (
        <div className="main-content flex flex-col flex-grow p-4">
            <h1 className="font-bold text-2xl text-gray-700">Cryptocurrencies</h1>
            <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4" ></div>
        </div>
    );
};

export default Cryptocurrencies;
