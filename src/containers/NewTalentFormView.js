import { connect } from 'react-redux'
import NewTalentForm from '../components/NewTalentForm'
import { sendForm, selectSection } from '../actions/actions'

const mapStateToProps = (state, ownProps) => ({
  selectedSection: state.selectedSection,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(sendForm(data)),
  onSelectSection: option => dispatch(selectSection(option)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewTalentForm)
