import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators'
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('/api/todolist');
    const action = initListAction(res.data);
    yield put(action);
  }catch (e) {
    alert("err");
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
