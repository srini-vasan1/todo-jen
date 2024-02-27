import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import rootReducer from './rootreducer';
import App from "./App"
import "./index.css"

const root = document.getElementById("root");

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)