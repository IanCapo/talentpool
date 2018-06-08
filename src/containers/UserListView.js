import { connect } from 'react-redux'
import UserList from '../components/UserList'
import { onSelectTalent } from '../actions/actions'

const mapStateToProps = state => ({
  users: state.users,
  selectedFilter: state.selectedFilter,
  selectedId: state.selectedId,
})

const mapDispatchToProps = dispatch => ({
  onSelectTalent: id => dispatch(onSelectTalent(id)),
})

const UserListView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList)

export default UserListView
