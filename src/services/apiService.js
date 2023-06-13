import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
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
    deleteUserToken: builder.query({
      query: () => ({
        url: 'api/v1/authentication',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useGetRoomsListQuery,
  useDeleteUserTokenQuery,
} = appApi;
