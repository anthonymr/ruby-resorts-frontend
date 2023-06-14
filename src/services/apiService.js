import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/api/v1/',
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
    // api endpoint to get user's info
    getUserInfo: builder.query({
      query: () => ({
        url: 'authentication',
        method: 'GET',
      }),
    }),
    // api endpoint to get Rooms list
    getRoomsList: builder.query({
      query: () => ({
        url: 'rooms',
        method: 'GET',
      }),
    }),
    // api endpoint to get a room's detail with ID
    getRoomDetail: builder.query({
      query: (roomId) => ({
        url: `api/v1/rooms/${roomId}`,
        method: 'GET',
      }),
    }),

    // api endpoint to post new room
    addNewRoom: builder.mutation({
      query: (payload) => ({
        url: 'rooms',
        method: 'POST',
        body: payload,
      }),
    }),

    // api endpoint to delete a room
    deleteRoom: builder.query({
      query: (roomId) => ({
        url: `rooms/${roomId}`,
        method: 'DELETE',
      }),
    }),

    // api endpoint to get Hotels list
    getHotelsList: builder.query({
      query: () => ({
        url: 'hotels',
        method: 'GET',
      }),
    }),
    // api endpoint to get Reservation list
    getReservationList: builder.query({
      query: () => ({
        url: 'reservations',
        method: 'GET',
      }),
    }),
    // api endpoint to get post new reservation
    addNewReservation: builder.mutation({
      query: (payload) => ({
        url: 'reservations',
        method: 'POST',
        body: payload,
      }),
    }),

    // api endpoint to delete user token
    deleteUserToken: builder.query({
      query: () => ({
        url: 'authentication',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useGetRoomsListQuery,
  useGetRoomDetailQuery,
  useAddNewRoomMutation,
  useDeleteRoomQuery,
  useGetHotelsListQuery,
  useGetReservationListQuery,
  useAddNewReservationMutation,
  useDeleteUserTokenQuery,
} = appApi;
