import { connect } from 'react-redux'
import TalentContactForm from '../components/TalentContactForm'
import { sendForm } from '../actions/actions'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(sendForm(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TalentContactForm)
