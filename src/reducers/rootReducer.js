import { combineReducers } from '@reduxjs/toolkit';
import isLoggedReducer from '../features/login/loginSlice';
import studentsReducer from '../features/students/studentsSlice';

const rootReducer = combineReducers({
    isLogged: isLoggedReducer,
    students: studentsReducer,
});

export default rootReducer;
