import { connect } from 'react-redux'
import Header from '../components/Header'
import { selectSection } from '../actions/actions'

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user._id === ownProps.match.params.id),
  selectedSection: state.selectedSection,
})

const mapDispatchToProps = dispatch => ({
  onSelectSection: option => dispatch(selectSection(option)),
})

const HeaderView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

export default HeaderView
