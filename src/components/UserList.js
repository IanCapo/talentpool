import React, { Component } from 'react'
import UserItem from '../components/UserItem'
import { Link } from 'react-router-dom'

export default class UserList extends Component {
  createFilteredUserItems = () => {
    const { selectedFilter, users } = this.props

    let filterFunction

    if (selectedFilter === 'all') {
      filterFunction = user => true
    } else if (selectedFilter === 'available') {
      filterFunction = user => user.status === selectedFilter
    } else {
      filterFunction = user => user.skills.includes(selectedFilter)
    }

    return users.filter(filterFunction).map(user => (
      <Link key={user._id} to={`/talentprofile/${user._id}`}>
        <UserItem
          photo={user.photo}
          name={user.name}
          location={user.location}
          status={user.status}
          skills={user.skills}
          lastname={user.lastname}
          id={user._id}
          users={users}
          history={user.history}
        />
      </Link>
    ))
  }

  render() {
    return <div>{this.createFilteredUserItems()}</div>
  }
}
