import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { overrideState } from './actions/actions'
import { useLocalStorage } from './middleware'

import initialState from './reducers/initialState'

import UserListPage from './components/UserListPage'
import TalentProfileView from './containers/TalentProfileView'
import ScrollToTop from './components/ScrollToTop'

const store = createStore(
  reducer,
  getInitialState(),
  applyMiddleware(useLocalStorage),
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
          <ScrollToTop>
            <Route exact path="/" component={UserListPage} />
            <Route path={`/talentprofile/:id`} component={TalentProfileView} />
          </ScrollToTop>
        </Router>
      </Provider>
    )
  }
}

function getInitialState() {
  const savedState = localStorage.getItem('state')
  if (savedState) {
    return JSON.parse(savedState)
  } else {
    return initialState
  }
}

export default App
