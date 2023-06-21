import detailsReducer, { getRoomDetails } from '../../redux/detailsPage/detailsSlice';

describe('detailsSlice', () => {
  describe('reducer', () => {
    const initialState = {
      roomDetails: {},
      isLoading: true,
      status: '',
    };

    it('should handle getRoomDetails', () => {
      const roomDetails = { id: 1, name: 'Room 1' };
      const nextState = detailsReducer(initialState, getRoomDetails(roomDetails));
      const expectedState = {
        ...initialState,
        roomDetails,
        status: 'completed',
      };
      expect(nextState).toEqual(expectedState);
    });
  });

  describe('actions', () => {
    it('should create an action to get room details', () => {
      const roomDetails = { id: 1, name: 'Room 1' };
      const expectedAction = {
        type: 'details/getRoomDetails',
        payload: roomDetails,
      };
      expect(getRoomDetails(roomDetails)).toEqual(expectedAction);
    });
  });
});
