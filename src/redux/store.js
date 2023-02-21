import { legacy_createStore as createStore } from 'redux'; //configureStore 
import rootReducers from './reducer'

const store = createStore(rootReducers)

export default store;