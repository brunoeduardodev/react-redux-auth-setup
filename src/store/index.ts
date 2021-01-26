import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { Auth } from './modules/auth/types'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'

export interface ApplicationState {
  auth: Auth
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
