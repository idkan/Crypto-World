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
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <svg className="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <svg className="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])}`, icon: <svg className="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <svg className="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <svg className="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg> },
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
                        <h2 className="text-4xl text-center mb-4 font-semibold font-heading">{cryptoDetails.name} ({cryptoDetails.symbol}) Price</h2>
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
                        <h3 className="text-2xl text-center mb-4 font-semibold font-heading">{cryptoDetails.name} Value Statistics.</h3>
                        <p className="text-center">An overview showing the stats of {cryptoDetails.name}.</p>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            {stats.map(({ title, value, icon, i }) => (
                                <li className="flex items-center py-3" key={i + title}>
                                    <span className='flex content-center items-center'>{icon} {title}</span>
                                    <span className="ml-auto">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </>

    );
};

export default CryptoDetails;
