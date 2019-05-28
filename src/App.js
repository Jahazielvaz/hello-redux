import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';
import reducer from './reducer';
import "./App.css"
import store from './store';
import ButtonGroup from './ButtonGroup';
import setTechnology from './actions';

class App extends Component {


  render() {

    return(
      [
        <HelloWorld key={1} tech={store.getState().tech} />,
        <ButtonGroup key={2} technologies={["React", "Vue", "Angular"]} />

      ]
    );
  }
}

export default App;
