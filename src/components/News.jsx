import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

import { LoadingButton } from '.';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });

    console.log(cryptoNews);

    if (!cryptoNews?.value) return (<LoadingButton />);

    const containerClasses = !simplified ? 'border-4 border-gray-400 border-dashed' : '';
    const paddingContainer = !simplified ? 'p-4' : '';

    // TODO: Refactor 
    function convertToDate(unixTime) {
        var dateObject = new Date(unixTime);
        return dateObject.toLocaleString("en-US");
    }

    return (
        <>
            <div className={"crypto-content flex flex-col flex-grow " + paddingContainer}>
                {!simplified && (
                    <h1 className="font-bold text-2xl text-gray-700">News</h1>
                )}
                <div className={"flex flex-col flex-grow bg-white mt-4 p-2 " + containerClasses} >
                    <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {cryptoNews.value.map((news, i) => (
                            <div tabIndex="0" className="rounded-3xl border shadow-md hover:shadow-lg focus:outline-none" aria-label={"New " + i} key={i}>
                                {/* TODO: Fix image size */}
                                <img role="img" aria-label="code editor" tabIndex="0" className="rounded-t-3xl focus:outline-none w-full" src={news?.image?.thumbnail?.contentUrl || demoImage } alt="Crypto News" />
                                <div className="py-4 px-8 w-full flex justify-between bg-gray-200">
                                    <p tabIndex="0" className="focus:outline-none text-sm text-black font-semibold tracking-wide">{news.provider[0].name}</p>
                                    <p tabIndex="0" className="focus:outline-none text-sm text-black font-semibold tracking-wide">{(convertToDate(news?.datePublished))}</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 tabIndex="0" className="focus:outline-none text-xl text-gray-900 font-semibold tracking-wider">{news.name}</h1>
                                    <p tabIndex="0" className="focus:outline-none text-gray-700 text-base   lg:leading-8 tracking-wide mt-6 w-11/12">{news.description}</p>
                                    <div className="w-full flex justify-end" >
                                        <a href={news.url} target='_blank' rel="noreferrer" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                            <span className=" text-base tracking-wide text-indigo-700">Read more</span>
                                            <svg className="ml-3 lg:ml-6 text-indigo-700" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M1 8.53662H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="h-5 w-2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
