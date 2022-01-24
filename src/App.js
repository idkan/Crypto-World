import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';

import { Sidebar, HomePage, Cryptocurrencies, CryptoDetails, Exchanges, News, Footer } from './components';

const App = () => {
    return (
        <div className="app flex flex-row min-h-screen bg-gray-100 text-gray-800">
            <Sidebar />
            <main className="main flex flex-col flex-grow -ml-96 md:ml-0 transition-all duration-150 ease-in">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/cryptocurrencies">
                        <Cryptocurrencies />
                    </Route>
                    <Route exact path="/crypto/:coinId">
                        <CryptoDetails />
                    </Route>
                    <Route exact path="/exchanges">
                        <Exchanges />
                    </Route>
                    <Route exact path="/news">
                        <News />
                    </Route>
                </Switch>
                <Footer />
            </main>
        </div>
    );
};

export default App;
