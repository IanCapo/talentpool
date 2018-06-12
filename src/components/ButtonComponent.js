import React, { Component } from 'react'
import styled from 'react-emotion'

const Button = styled('button')`
  border: solid 1px #ed6544;
  background: #ed6544;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  margin: 1rem;
  width: 33%;
  color: white;
  overflow: auto;
`

export default class ButtonComponent extends Component {
  render() {
    return <Button>{this.props.text}</Button>
  }
}
