import { connect } from 'react-redux'
import TalentProfile from '../components/TalentProfile'

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.match.params.id),
})

const TalentProfileView = connect(mapStateToProps)(TalentProfile)

export default TalentProfileView
