import { connect } from 'react-redux'
import UserItem from '../components/UserItem'

const mapStateToProps = state => ({
  users: state.users,
})

const UserListView = connect(mapStateToProps)(UserItem)

export default UserListView
