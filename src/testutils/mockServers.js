/*eslint-disable*/
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userInfoData, {
  roomsData,
  hotelsData,
  detailsData,
  reservationsData,
  newRoomData,
} from './mockServerData';

const roomsHandler = [
  rest.get('http://127.0.0.1:3000/api/v1/authentication', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userInfoData), ctx.delay(10));
  }),
  rest.get('http://127.0.0.1:3000/api/v1/rooms', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(roomsData), ctx.delay(10));
  }),
  rest.get('http://127.0.0.1:3000/api/v1/hotels', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(hotelsData), ctx.delay(1));
  }),
  rest.get('http://127.0.0.1:3000/api/v1/rooms/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(detailsData), ctx.delay(1));
  }),
  rest.get('http://127.0.0.1:3000/api/v1/reservations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(reservationsData), ctx.delay(1));
  }),
  rest.delete('http://127.0.0.1:3000/api/v1/rooms/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(detailsData), ctx.delay(1));
  }),
  rest.post('http://127.0.0.1:3000/api/v1/rooms/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(newRoomData), ctx.delay(1));
  }),
];

export const server1 = setupServer(...roomsHandler);
