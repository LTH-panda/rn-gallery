import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type FormState = {
  [key: string]: any;
  username: string;
  email: string;
  password: string;
};

const initialState: FormState = {
  username: '',
  email: '',
  password: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeUsername: (state, {payload}: PayloadAction<string>) => {
      state.username = payload;
    },
    changeEmail: (state, {payload}: PayloadAction<string>) => {
      state.email = payload;
    },
    changePassword: (state, {payload}: PayloadAction<string>) => {
      state.password = payload;
    },
    clearForm: () => initialState,
  },
});

export const {changeUsername, changeEmail, changePassword, clearForm} =
  formSlice.actions;
export default formSlice.reducer;
