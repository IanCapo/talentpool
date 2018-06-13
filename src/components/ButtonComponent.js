import React, { Component } from 'react'
import styled from 'react-emotion'

const Button = styled('button')`
  border: solid 1px #ed6544;
  background: #ed6544;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  margin: 1rem;
  padding: auto 0.25rem;
  width: auto;
  color: white;
  overflow: auto;
  &:hover {
    background: white;
    color: #ed6544;
    border: 1px solid #ed6544;
  } 
  &:focus, :active {
    outline: none !important;
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
  padding: auto 0.25rem;
  width: auto;
  overflow: auto;
  &:focus, :active {
    outline: none !important;
  }
  }
`

export default class ButtonComponent extends Component {
  renderButton = () => {
    if (this.props.selectedSection === this.props.text) {
      return (
        <ActiveButton onClick={e => this.props.onClick()}>
          {this.props.text}
        </ActiveButton>
      )
    } else {
      return (
        <Button onClick={e => this.props.onClick()}>{this.props.text}</Button>
      )
    }
  }
  render() {
    return <div>{this.renderButton()}</div>
  }
}
