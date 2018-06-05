import React, { Component } from 'react'
import { css } from 'emotion'

export default class UserItem extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <section
            className={css`
              display: flex;
              flex-direction: row;
            `}
          >
            <div>
              <img src={user.photo} alt="" width="100px" />
            </div>
            <div
              className={css`
                margin-left: 5px;
              `}
            >
              <h3>
                {user.name} | {user.location}
              </h3>
              <p>{user.status}</p>
              <p>
                {user.skills[0]} {user.skills[1]} {user.skills[2]}
              </p>
            </div>
          </section>
        ))}
      </div>
    )
  }
}
