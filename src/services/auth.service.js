import store from '../redux/store';

const userLoggedIn = () => {
  const { user } = store.getState();
  if (user) {
    return true;
  }
  return false;
};

// export const userSignIn = (credentials) => {
//   store.dispatch(fetchUserToken(credentials));
// };

export default userLoggedIn;
