import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = state => ({
  users: state.users,
  selectedFilter: state.selectedFilter,
})

const UserListView = connect(mapStateToProps)(UserList)

export default UserListView
