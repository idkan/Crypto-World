import React, { useState } from 'react';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { LoadingButton } from '.';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

    if (!cryptoNews?.value) return (<LoadingButton />);

    const containerClasses = !simplified ? 'border-4 border-gray-400 border-dashed' : '';
    const paddingContainer = !simplified ? 'p-4' : '';

    return (
        <>
            <div className={"crypto-content flex flex-col flex-grow " + paddingContainer}>
                {!simplified && (
                    <div>
                        <h1 className="font-bold text-2xl text-gray-700">News</h1>
                        <select
                            onChange={(value) => setNewsCategory(value.target.value)}
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm md:w-80 focus:ring-1">
                            {data?.data?.coins?.map((currency, i) => <option key={i} value={currency.name.toLowerCase()}>{currency.name}</option>)}
                        </select>
                    </div>

                )}
                <div className={"flex flex-col flex-grow bg-white mt-4 p-2 " + containerClasses} >
                    <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {cryptoNews.value.map((news, i) => (
                            <a href={news.url} target='_blank' rel="noreferrer" className="rounded-3xl border hover:shadow-lg focus:outline-none" aria-label={"New " + i} key={i}>
                                <img className="h-40 rounded-sm my-2 mx-auto" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="Crypto News" />
                                <div className="py-4 px-4 w-full flex justify-between bg-gray-200">
                                    <p className="focus:outline-none text-sm text-black font-semibold ">{news.provider[0].name}</p>
                                </div>
                                <div className="bg-white px-4 py-4 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="focus:outline-none text-xl text-gray-900 font-semibold ">{news.name}</h1>
                                    <p className="focus:outline-none text-gray-700 text-base lg:leading-8 mt-6 w-full">
                                        {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                    </p>
                                    <div className="flex content-center items-center justify-between mt-8">
                                        <img className="h-8 rounded-full" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="Crypto News" />
                                        <p className="focus:outline-none text-gray-500 text-base ml-4 lg:leading-8">
                                            {moment(news.datePublished).startOf('ss').fromNow()}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
