import { connect } from 'react-redux'
import TalentProfile from '../components/TalentProfile'
import { selectSection } from '../actions/actions'

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.match.params.id),
  selectedSection: state.selectedSection,
})

const mapDispatchToProps = dispatch => ({
  onSelectSection: option => dispatch(selectSection(option)),
})

const TalentProfileView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TalentProfile)

export default TalentProfileView
