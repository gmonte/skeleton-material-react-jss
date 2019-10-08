import { createActions, createReducer } from 'reduxsauce'

/*
 * Creating action types & creators
 * */
export const { Types, Creators } = createActions({
  login: ['email', 'password'],
  loginSuccess: [],
  loginError: ['error'],
  logout: []
})

/*
 * Creating Initial state and Redux handlers
 * */
const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  error: null
}

const login = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: INITIAL_STATE.error
})

const loginSuccess = (state = INITIAL_STATE) => ({
  ...state,
  authenticated: true,
  loading: false
})

const loginError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  loading: false,
  error
})

const logout = () => ({ ...INITIAL_STATE })

/*
 * Creating reducer
 * */
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_ERROR]: loginError,
  [Types.LOGOUT]: logout
})
