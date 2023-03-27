import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  token: localStorage.getItem('token') || '',
  lang: localStorage.getItem('lang') || 'pl',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      localStorage.setItem('isLoggedIn', action.payload.isLoggedIn);
      localStorage.setItem('token', action.payload.token);
    },
  },
});

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang(state, action) {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload.token);
    },
  },
});

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    lang: langSlice.reducer,
  },
});

export default store;

export const { setLoggedIn } = loginSlice.actions;

export const { setLang } = langSlice.actions;
