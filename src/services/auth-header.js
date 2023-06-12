import store from '../redux/store';

const authHeader = () => {
  const user = store.getState.user;
  console.log(user);
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else return {};
};

export default authHeader;
