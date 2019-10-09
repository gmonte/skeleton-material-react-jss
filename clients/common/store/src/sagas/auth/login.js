import {
  takeLatest, put, call
} from 'redux-saga/effects'
import isEmpty from 'lodash/isEmpty'
import { loginAd } from '@conheca-meta-clients/s-ad'
import { signInWithEmailAndPassword } from '@conheca-meta-clients/s-firebase/src/auth'
import { Types } from '../../ducks/auth'

function* login({ email, password }) {
  try {

    const [username, client] = email.split('@')

    if (client === 'meta.com.br') {
      const { data } = yield call(loginAd, {
        data: {
          username,
          password
        }
      })

      if (isEmpty(data)) {
        throw new Error('Usuário ou senha incorreto')
      }
    } else {

      try {
        yield call(signInWithEmailAndPassword, {
          email,
          password
        })
      } catch (e) {
        throw new Error('Usuário ou senha incorreto')
      }
    }

    yield put({
      type: Types.LOGIN_SUCCESS
    })
  } catch (e) {
    yield put({
      type: Types.LOGIN_ERROR,
      error: e.toString()
    })

    window.snackbar.error(e.toString())
  }
}

export default [takeLatest(Types.LOGIN, login)]
