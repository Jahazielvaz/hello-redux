import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';
import reducer from './reducers';
import "./App.css"

const initialState = { tech: "Redux" };


const store = createStore(reducer, initialState)

class App extends Component {

  render() {
    return(
      <div>
        <HelloWorld tech={store.getState().tech} />
        <button className="buttons">React</button>
        <button className="buttons">Vue</button>
        <button className="buttons">Angular</button>
      </div>
    );
  }
}

export default App;
