import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store.js';
import MainPage from '../components/mainpage/mainPage.js';
import DeleteRoom from '../components/deleteRoomPage/DeleteRoom.jsx';
import LoginPage from '../components/loginPage/loginPage.js';
import SignUpPage from '../components/signUpPage.js';

describe('snapshot tests for components', () => {
  console.log(store.getState());
  it('testing mainpage snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <MainPage />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Login Page snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing delete page snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <DeleteRoom />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing sign up snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <SignUpPage />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('testing New Reservation snapshot', () => {
  //   const tree = renderer
  //     .create(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <NewReservePage />
  //         </Provider>
  //       </BrowserRouter>
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('testing My Reservations snapshot', () => {
  //   const tree = renderer
  //     .create(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <MyReservations />
  //         </Provider>
  //       </BrowserRouter>
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
