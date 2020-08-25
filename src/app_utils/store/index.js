import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import AuthReducer from 'app_utils/reducers';
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  appState: AuthReducer,
});
let store = createStore(reducers,   applyMiddleware(sagaMiddleware)
);
// sagaMiddleware.run(helloSaga)
export default store;
