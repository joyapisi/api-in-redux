import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/user/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;

// https://redux-toolkit.js.org/tutorials/quick-start
// https://www.youtube.com/watch?v=u3KlatzB7GM
