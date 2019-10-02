import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootSagas from './sagas'
import reducers from './ducks'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({}))
}

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

store.runSaga = sagaMiddleware.run
store.close = () => store.dispatch(END)
store.persist = () => persistStore(store)
store.runSaga(rootSagas)

export default store
