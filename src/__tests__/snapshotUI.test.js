import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import MainPage from '../components/mainPage/mainPage';
import DeleteRoom from '../components/deleteRoomPage/DeleteRoom';
import MyReservations from '../components/myReservationsPage/myReservations';
import LoginPage from '../components/loginPage/loginPage';
import SignUpPage from '../components/signUpPage';

describe('snapshot tests for components', () => {
  it('testing mainpage snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <MainPage />
          </Provider>
        </BrowserRouter>,
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
        </BrowserRouter>,
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
        </BrowserRouter>,
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
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('testing my reservations page', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <MyReservations />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
