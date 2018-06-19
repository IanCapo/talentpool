import React, { Component } from 'react'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { overrideState } from './actions/actions'

import initialState from './reducers/initialState'

import UserListPage from './components/UserListPage'
import TalentProfileView from './containers/TalentProfileView'

const store = createStore(
  reducer,
  setupInitialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

class App extends Component {
  componentDidMount() {
    fetch('/state', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(state => store.dispatch(overrideState(state)))
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <section>
            <Route exact path="/" component={UserListPage} />
            <Route path={`/talentprofile/:id`} component={TalentProfileView} />
          </section>
        </Router>
      </Provider>
    )
  }
}

function setupInitialState() {
  let stateString = localStorage.getItem('state')
  if (stateString) {
    return JSON.parse(stateString)
  } else {
    localStorage.setItem('state', JSON.stringify(initialState))
    return initialState
  }
}

export default App
