import { connect } from 'react-redux'
import Filter from '../components/Filter'
import { toggle, onSelect } from '../actions/actions'

const mapStateToProps = state => ({
  filter: state.filter,
  dropdownOpen: state.dropdownOpen,
  selectedFilter: state.selectedFilter,
})
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggle()),
  onItemClick: option => dispatch(onSelect(option)),
})

const UserFilterView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)

export default UserFilterView
