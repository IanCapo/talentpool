import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('button')`
  border: solid 1px #ed6544;
  background: #ed6544;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  margin: 1rem;
  padding: .12rem .5rem;
  width: auto;
  color: white;
  overflow: auto;
  &:focus, {
    outline: none;
  }
  }
`
const ActiveButton = styled('button')`
  background: white;
  color: #ed6544;
  border: 1px solid #ed6544;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  margin: 1rem;
  padding: .12rem .5rem;
  width: auto;
  overflow: auto;
  &:focus{
    outline: none;
  }
  }
`

export default class Button extends Component {
  renderButton = () => {
    const { selectedSection, text, onClick } = this.props
    if (selectedSection === text) {
      return <ActiveButton onClick={e => onClick()}>{text}</ActiveButton>
    } else if (selectedSection !== text) {
      return <StyledButton onClick={e => onClick()}>{text}</StyledButton>
    }
  }
  render() {
    return <div>{this.renderButton()}</div>
  }
}
