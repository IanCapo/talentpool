import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

const Wrapper = styled('div')`
  display: flex;
`

export default class UserItem extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <img src={this.props.photo} alt="" width="100px" />
        </div>
        <div
          className={css`
            margin-left: 5px;
          `}
        >
          <h3>
            {this.props.name} | {this.props.location}
          </h3>
          <p>{this.props.status}</p>
          <p>
            {this.props.skills[0]} {this.props.skills[1]} {this.props.skills[2]}
          </p>
        </div>
      </Wrapper>
    )
  }
}
