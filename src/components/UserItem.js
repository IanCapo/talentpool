import React, { Component } from 'react'

export default class UserItem extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div>
            <h3>
              {user.name} | {user.location}
            </h3>
            <p>{user.status}</p>
            <p>
              {user.skills[0]} {user.skills[1]} {user.skills[2]}
            </p>
            <div>
              <img src={user.photo} alt="" />
            </div>
          </div>
        ))}
      </div>
    )
  }
}
