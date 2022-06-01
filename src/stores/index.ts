import {configureStore} from '@reduxjs/toolkit';
import form from './form';
import user from './user';

const store = configureStore({
  reducer: {
    form,
    user,
  },
  // eslint-disable-next-line no-undef
  devTools: __DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
