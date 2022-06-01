import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from 'api/user-api/type';

type UserState = {
  user: User | undefined;
};

const initialState: UserState = {
  user: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, {payload}: PayloadAction<User | undefined>) => {
      state.user = payload;
    },
    clearUser: state => {
      state.user = undefined;
    },
  },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
