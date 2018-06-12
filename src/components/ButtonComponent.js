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
const ActiveButton = {
  opacity: 0.8,
}

export default class ButtonComponent extends Component {
  render() {
    return (
      <Button onClick={e => this.props.onClick()}>{this.props.text}</Button>
    )
  }
}
