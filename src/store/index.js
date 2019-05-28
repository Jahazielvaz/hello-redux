import { createStore } from 'redux';
import reducer from '../reducer';

const initialState = {
  tech: "This is my very first state",
  other: "Just a test"
}

const store = createStore(reducer, initialState);

export default store;
