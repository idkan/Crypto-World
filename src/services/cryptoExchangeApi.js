import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoExchangesHeaders = {
    'accept': 'application/json'
}

const baseUrl = 'https://api.coingecko.com/api/v3';

const createRequest = (url) => ({ url, headers: cryptoExchangesHeaders });

export const cryptoExchangesApi = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        })
    })
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;