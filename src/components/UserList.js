import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

const Wrapper = styled('section')`
  display: flex;
`

export default class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.users
          .filter(user => user.status === this.props.selectedFilter)
          .map(user => (
            <Wrapper>
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
            </Wrapper>
          ))}
      </div>
    )
  }
}
