//import { legacy_createStore as createStore } from 'redux'; //configureStore 
import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './reducer'

const store = configureStore({reducer: rootReducers})

export default store;