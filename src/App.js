import React, { Component } from 'react'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import initialState from './reducers/initialState'

import TalentList from './TalentList'
import TalentProfile from './TalentProfile'

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
    return (
      <Router>
        <section>
          <Route exact path="/" render={() => <TalentList />} />
          <Route path="/talentprofile" component={TalentProfile} />
          <div>
            <Link to="/">TalentList </Link>
            <Link to="/talentprofile">TalentProfile</Link>
          </div>
        </section>
      </Router>
    )
  }
}

export default App
