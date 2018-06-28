import { connect } from 'react-redux'
import SkillTags from '../components/SkillTags'
import { addSkill } from '../actions/actions'

const mapStateToProps = state => ({
  skills: state.skills,
})

const mapDispatchToProps = dispatch => ({
  addSkill: skill => dispatch(addSkill(skill)),
})

const SkillTagsView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SkillTags)

export default SkillTagsView
