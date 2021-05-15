import React, { Component } from 'react'
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootScreen from "./Components/Home/RootScreen";

import reducer from "./Redux/reducer";
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <RootScreen />
      </Provider>
    )
  }
}