import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import UserItem from '../components/UserItem'

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

    return users
      .filter(filterFunction)
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

  render() {
    return <div>{this.createFilteredUserItems()}</div>
  }
}
