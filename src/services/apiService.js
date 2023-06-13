import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({
        url: 'api/v1/authentication',
        method: 'GET',
      }),
    }),
    getRoomsList: builder.query({
      query: () => ({
        url: 'api/v1/rooms',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, useGetRoomsListQuery } = authApi;
