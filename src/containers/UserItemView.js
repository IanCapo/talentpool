import { connect } from 'react-redux'
import UserItem from '../components/UserItem'

const mapStateToProps = state => ({
  users: state.users,
  selectedFilter: state.selectedFilter,
})

const UserItemView = connect(mapStateToProps)(UserItem)

export default UserItemView
