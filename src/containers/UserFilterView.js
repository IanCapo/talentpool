import { connect } from 'react-redux'
import Filter from '../components/Filter'
import { toggle } from '../actions/actions'

const mapStateToProps = state => ({
  filter: state.filter,
  dropdownOpen: state.dropdownOpen,
})
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggle()),
})

const UserFilterView = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default UserFilterView
