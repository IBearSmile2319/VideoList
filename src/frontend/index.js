import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore,compose } from 'redux'
import reducer from './reducers'
import {createBrowserHistory} from 'history'
import {Router} from 'react-router'
import initialState from './utils/intialState'
const composeEnhancers ='object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;
const store=createStore(reducer,initialState,composeEnhancers())

const history = createBrowserHistory()
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
)
