import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled from 'react-emotion'
import { css } from 'emotion'
import reducer from './reducers/reducer'

import initialState from './reducers/initialState'
import UserListView from '../src/containers/UserListView'
import UserFilterView from '../src/containers/UserFilterView'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const MainApp = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    return (
      <Provider store={store}>
        <MainApp>
          <UserFilterView
            className={css`
              align-self: flex-end;
            `}
          />
          <UserListView />
        </MainApp>
      </Provider>
    )
  }
}

export default App
