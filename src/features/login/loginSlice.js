import { createSlice } from '@reduxjs/toolkit';
export const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState: {
        value: false,
        text: '',
    },
    reducers: {
        login: (state, action) => {
            state.value = true;
            state.text = action.payload;
        },
        logout: (state, { payload }) => {
            state.value = false;
            state.text = payload;
        },
    },
});
export const { login, logout } = isLoggedSlice.actions;
export default isLoggedSlice.reducer;
