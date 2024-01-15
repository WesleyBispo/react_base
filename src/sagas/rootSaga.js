import { all } from 'redux-saga/effects';
import studentsSaga from '../features/students/studentSaga';

export default function* rootSaga() {
    yield all([studentsSaga()]);
}
