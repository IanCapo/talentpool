import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { overrideState } from './actions/actions'
import { useLocalStorage } from './middleware'

import initialState from './reducers/initialState'

import UserListPage from './components/UserListPage'
import TalentProfileView from './containers/TalentProfileView'
import ScrollToTop from './components/ScrollToTop'
import NewTalentFormView from './containers/NewTalentFormView'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  getInitialState(),
  composeEnhancers(applyMiddleware(useLocalStorage)),
)

class App extends Component {
  componentDidMount() {
    fetch('/person', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(state => store.dispatch(overrideState(state)))
      .catch(error => console.warn(error))
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={UserListPage} />
            <Route path={`/talentprofile/:id`} component={TalentProfileView} />
            <Route path={`/newuser`} component={NewTalentFormView} />
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
