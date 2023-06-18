const userInfoData = {
  id: 1,
  name: 'Test User',
  username: 'testuser',
  email: 'testuser@test.com',
  role: 'admin',
  created_at: '2023-06-17T12:20:06.319Z',
  updated_at: '2023-06-17T12:20:47.606Z',
};

export const roomsData = [
  {
    id: 1,
    name: 'Server Test Suite 1',
    description: 'description of server test suite 1',
    image_url: 'someimageurl1',
  },
  {
    id: 2,
    name: 'Server Test Suite 2',
    description: 'description of server test suite 2',
    image_url: 'someimageurl2',
  },
];

export const hotelsData = [
  {
    id: 1,
    name: 'Test Hotel 1',
    city: 'Test City 1',
    created_at: '2023-06-17T12:15:02.781Z',
    updated_at: '2023-06-17T12:15:02.781Z',
  },
];

export const detailsData = {
  id: 1,
  name: 'Server Test Suite 1',
  description: 'Description of test suite 1',
  full_price: '100.0',
  reservation_price: '10.0',
  reservation_fee: '10.0',
  rating: 5,
  created_at: '2023-06-17T12:15:02.876Z',
  updated_at: '2023-06-17T12:15:02.887Z',
  image_url: 'some image url',
};

export const newRoomData = {
  id: 1,
  name: 'Server New Test Suite',
  description: 'Description of new test suite',
  full_price: '250.0',
  reservation_price: '200.0',
  reservation_fee: '10.0',
  rating: 5,
  created_at: '2023-06-17T12:15:02.876Z',
  updated_at: '2023-06-17T12:15:02.887Z',
  image_url: 'some image url',
};

export const reservationsData = [
  {
    id: 1,
    start_date: '2023-06-18',
    end_date: '2023-06-20',
    user_id: 1,
    hotel_id: 1,
    room_id: 1,
    created_at: '2023-06-18T07:11:15.304Z',
    updated_at: '2023-06-18T07:11:15.304Z',
    amount: '20.0',
    hotel: {
      id: 1,
      name: 'Test Hotel',
      city: 'Test City',
    },
    room: {
      id: 1,
      name: 'Test Suite',
      description:
        'description of test suite 1',
      full_price: '100.0',
      reservation_price: '10.0',
      reservation_fee: '10.0',
      rating: 5,
    },
    user: {
      id: 1,
      name: 'Server Test User 1',
      username: 'testuser',
      email: 'testuser@test.com',
      role: 'admin',
    },
  },
];

export default userInfoData;
