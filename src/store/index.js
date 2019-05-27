import { createStore } from 'redux';
import reducer from '../reducer';

const initialState = {
  message: "This is my very first state"
}

const store = createStore(reducer, initialState);

export default store;
