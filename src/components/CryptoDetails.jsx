import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { LoadingButton } from '.';

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin;

    if (isFetching) return <LoadingButton />;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}` },
        { title: 'Rank', value: cryptoDetails?.rank },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}` },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}` },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}` },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}` },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}` },
    ];

    console.log(data);

    return (
        <>
            <div className="main-content flex flex-col flex-grow p-4">
                <h1 className="font-bold text-2xl text-gray-700">CryptoDetails</h1>
                <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4" >
                    <article className="py-2 px-4">
                        <h1 className="text-4xl text-center mb-4 font-semibold font-heading">{cryptoDetails.name} ({cryptoDetails.symbol}) Price</h1>
                        <p className="text-center">
                            {cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.
                            <a className="ml-1 text-indigo-600 hover:underline" href={cryptoDetails.websiteUrl} target="_blank" >{cryptoDetails.name} Web Page</a>
                        </p>
                        <hr className="my-4" />
                        <select
                            onChange={(value) => setTimePeriod(value)}
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm md:w-80 focus:ring-1">
                            {time.map((date, i) => <option key={i} value={date}>{date}</option>)}
                        </select>
                        <ul
                            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto"><span
                                    className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">Nov 07, 2016</span>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </>

    );
};

export default CryptoDetails;
