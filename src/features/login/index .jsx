import { createSlice } from '@reduxjs/toolkit';
const reducerIsLogged = createSlice({
    name: 'isLogged',
    initialState: {
        value: false,
    },
    reducers: {
        login: (state) => {
            state.value = state.value ? false : true;
        },
    },
});
export const { login } = reducerIsLogged.actions;
export default reducerIsLogged.reducer;
