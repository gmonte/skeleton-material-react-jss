import {
  takeLatest, put, delay
} from 'redux-saga/effects'
import { Types } from '../../ducks/auth'

function* login() {
  try {
    yield delay(500)
    yield put({
      type: Types.LOGIN_SUCCESS
    })
  } catch (e) {
    yield put({
      type: Types.LOGIN_ERROR,
      error: e.toString()
    })
  }
}

export default [takeLatest(Types.LOGIN, login)]
