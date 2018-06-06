import React, { Component } from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')`
  display: flex;
`
const Img = styled('img')`
  width: 100px;
`
const Usercontent = styled('div')`
  margin-left: 5px;
`

export default class UserItem extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Img src={this.props.photo} alt="" />
        </div>
        <Usercontent>
          <h3>
            {this.props.name} | {this.props.location}
          </h3>
          <p>{this.props.status}</p>
          <p>{this.props.skills.join(' ')}</p>
        </Usercontent>
      </Wrapper>
    )
  }
}
