import { createStore } from 'redux';

const initialState = {
    isLogged: false,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            const newState = {
                ...state,
                isLogged: state.isLogged
                    ? (state.isLogged = false)
                    : (state.isLogged = true),
            };

            return newState;
        }
        default:
            return state;
    }
};

export const store = createStore(reducer);
