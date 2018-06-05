import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import UserItem from '../components/UserItem'

export default class UserList extends Component {
  filterUserItems = () => {
    if (this.props.selectedFilter === 'all') {
      return this.props.users.map(user => (
        <UserItem
          photo={user.photo}
          name={user.name}
          location={user.location}
          status={user.status}
          skills={user.skills}
        />
      ))
    } else if (this.props.selectedFilter === 'available') {
      return this.props.users
        .filter(user => user.status === this.props.selectedFilter)
        .map(user => (
          <UserItem
            photo={user.photo}
            name={user.name}
            location={user.location}
            status={user.status}
            skills={user.skills}
          />
        ))
    }
  }
  render() {
    return <div>{this.filterUserItems()}</div>
  }
}
