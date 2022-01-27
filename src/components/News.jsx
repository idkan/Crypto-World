import React from 'react';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { LoadingButton } from '.';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });

    console.log(cryptoNews);

    if (!cryptoNews?.value) return (<LoadingButton />);

    const containerClasses = !simplified ? 'border-4 border-gray-400 border-dashed' : '';
    const paddingContainer = !simplified ? 'p-4' : '';


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
                            <a href={news.url} target='_blank' rel="noreferrer" tabIndex="0" className="rounded-3xl border hover:shadow-lg focus:outline-none" aria-label={"New " + i} key={i}>
                                <img role="img" aria-label="code editor" tabIndex="0" className="h-40 rounded-sm my-2 mx-auto" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="Crypto News" />
                                <div className="py-4 px-4 w-full flex justify-between bg-gray-200">
                                    <p tabIndex="0" className="focus:outline-none text-sm text-black font-semibold ">{news.provider[0].name}</p>
                                    <p tabIndex="0" className="focus:outline-none text-sm text-black font-semibold ">{(convertToDate(news?.datePublished))}</p>
                                </div>
                                <div className="bg-white px-4 py-4 rounded-bl-3xl rounded-br-3xl">
                                    <h1 tabIndex="0" className="focus:outline-none text-xl text-gray-900 font-semibold ">{news.name}</h1>
                                    <p tabIndex="0" className="focus:outline-none text-gray-700 text-base lg:leading-8 mt-6 w-full">
                                        {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                    </p>
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
