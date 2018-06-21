import { connect } from 'react-redux'
import App from '../App'
import { overrideState } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
  overrideState: () => dispatch(overrideState()),
})

const App = connect(mapDispatchToProps)(App)
