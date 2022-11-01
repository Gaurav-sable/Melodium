import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key', '3f39b720b9msh6ed9195951034fbp1ddb08jsn214698bd77ef');
            return headers;
        },
    }),  
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () =>  '/charts/world' }),   
        getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${ songid }` }),
    }),

});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;