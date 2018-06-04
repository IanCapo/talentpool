import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled from 'react-emotion'
import reducer from './reducers/reducer'

import initialState from './reducers/initialState'
import UserListView from '../src/containers/UserListView'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const state = store.getState()
    return (
      <Provider store={store}>
        <div className="App">
          <UserListView/>
        </div>
      </Provider>
    )
  }
}

export default App
