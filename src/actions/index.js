const userLogIn = (token) => {
  return {
    type: 'USER_LOGGED_IN',
    token,
    message: 'Okay'
  }
};

const userNotLogIn = () => {
  return {
    type: 'USER_NOT_LOGGED_IN',
    message: 'Oops!'
  }
};